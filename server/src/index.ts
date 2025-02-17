import express from "express";
import http from "http";
import cors from "cors";
import { ExpressPeerServer } from "peer";
import { Chat, Meet } from "./models";
import { Server } from "socket.io";
import Routes from "./routes";
import mongoose from "mongoose";
import chalk from "chalk";

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {});

// Better error handling for MongoDB connection
mongoose.connect(MONGO_URI || "mongodb+srv://12345:12345@cluster0.gr5tf.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
})
.then(() => {
  console.log(chalk.green('✓ MongoDB Connected'));
})
.catch(err => {
  console.error(chalk.red('✗ MongoDB Connection Error:'), err);
  process.exit(1);
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(chalk.red('Error:'), err);
  res.status(500).json({ message: "Internal server error" });
});

// for google app engine
app.set("trust proxy", true);
// cors
app.use(cors());
// POST request body json parser
app.use(express.json());
// routes for REST API
app.use(Routes);

app.get("/", (_req, res) => {
  res.send("Server is up and running");
});

// Peer js endpoint
app.use("/peerjs", peerServer);
// Initialize Socket Server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Listens to socket events
io.on("connection", (socket) => {
  socket.on("join-room", (userData) => {
    const { meetID, userID } = userData;

    // Join the meet room
    socket.join(meetID);

    // Broadcast only if user is connected to video call, userID is not available for chats only
    if (userID) {
      console.log("Video");
      socket.broadcast.to(meetID).emit("user-connected", userData);
    }

    // Handles Messages of room
    socket.on("sendMessage", async (incomingData) => {
      console.log("message", incomingData);
      const msgData = await new Chat(incomingData).save();
      await Meet.findOneAndUpdate({ meetID }, { $push: { chat: msgData } });
      io.to(meetID).emit("newMessage", msgData);
    });

    // Lock meeting
    socket.on("lockMeeting", async (incomingData) => {
      console.log("lockMeeting", incomingData);
      await Meet.findOneAndUpdate({ meetID }, { locked: incomingData });
      io.to(meetID).emit("lockMeeting", incomingData);
    });

    // someone raises hand
    socket.on("raiseHand", async (incomingData) => {
      console.log("raiseHand", incomingData);
      io.to(meetID).emit("onRaiseHand", incomingData);
    });

    // poll created
    socket.on("newPoll", async (incomingData) => {
      console.log("newPoll", incomingData);
      io.to(meetID).emit("onNewPoll", incomingData);
    });

    // poll respond
    socket.on("respondPoll", async (incomingData) => {
      console.log("newPoll", incomingData);
      io.to(meetID).emit("respondPoll", incomingData);
    });

    // remove someone
    socket.on("forceQuit", async (incomingData) => {
      console.log("forceQuit", incomingData);
      io.to(meetID).emit("forceQuit", incomingData);
    });

    // someone changes the tab
    socket.on("changeTab", async (incomingData) => {
      console.log("changeTab", incomingData);
      io.to(meetID).emit("changeTab", incomingData);
    });

    // user gets disconnected
    socket.on("disconnect", () => {
      socket.broadcast.to(meetID).emit("user-disconnected", userID);
    });
  });
});

// Add error handling for server.listen
server.listen(PORT, () => {
  console.log(chalk.blue(`✓ Server running on port ${PORT}`));
}).on('error', (err) => {
  console.error(chalk.red('✗ Server Error:'), err);
  process.exit(1);
});
