import express from "express";
import { sendMail } from "../utils/sendMail";
import { createEvent } from "ics";
import { Meet } from "../models";
import { generateID } from "../utils/UID";
import { InviteTemplate } from "../email/invite";
import { User } from "../models/user";

const Router = express.Router();

Router.post("/", async (req, res) => {
  try {
    const { title, invitees, hostID, type, time } = req.body;
    console.log("Creating new meeting:", { title, invitees, hostID, type, time });

    const user = await User.findById(hostID);
    if (!user) {
      console.log("User not found:", hostID);
      return res.status(404).json({ message: "User not found" });
    }

    const meetID = generateID();
    console.log("Generated meetID:", meetID);

    const meet = new Meet({ title: title || meetID, invitees, hostID, type, time, meetID });
    await meet.save();
    console.log("Meeting saved successfully");

    if (invitees?.length) {
      const now = new Date(time);
      const hostedURL = process.env.DEV
        ? "http://localhost:3000/"
        : "http://trio-calls.vercel.app/";
      
      const chatLink = `${hostedURL}chat/${meet.meetID}`;
      const meetLink = `${hostedURL}${meet.meetID}`;

      console.log("Preparing email with links:", { chatLink, meetLink });

      const { error, value } = createEvent({
        title: title || "Trio Calls Meet",
        description: "You are invited to a Trio Calls meeting",
        start: [
          now.getFullYear(),
          now.getMonth() + 1,
          now.getDate(),
          now.getHours(),
          now.getMinutes(),
        ],
        url: meetLink,
        organizer: { name: user.displayName, email: user.email },
        duration: { minutes: 50 },
      });

      if (error) {
        console.error("Calendar event creation error:", error);
      }

      const html = InviteTemplate({
        chatLink,
        meetLink,
        displayName: user.displayName,
        email: user.email,
      });

      console.log("Sending email to:", invitees.join(", "));

      try {
        await sendMail({
          from: `"${user.displayName} via Trio Calls" <${process.env.EMAIL_USERNAME}>`,
          to: invitees.join(","),
          subject: `${user.displayName} is inviting you to a Trio Calls meeting`,
          html,
          ...(value && {
            icalEvent: {
              filename: "invitation.ics",
              method: "REQUEST",
              content: value,
            },
          }),
        });

        console.log("Email sent successfully");
      } catch (error) {
        console.error("Email sending failed:", error);
      }
    }

    return res.status(200).json({ meetID: meet.meetID });
  } catch (error) {
    console.error("NewMeet route error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export const NewMeet = Router;
