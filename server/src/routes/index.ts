import express from "express";
import { GetMeetAll } from "./getAllMeets";
import { GetProfile } from "./getProfile";
import { GetChat } from "./getChat";
import { GetMeet } from "./getMeet";
import { NewMeet } from "./newMeet";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";

const Router = express.Router();

Router.use("/getChat", GetChat);
Router.use("/newMeet", NewMeet);
Router.use("/getAllMeet", GetMeetAll);
Router.use("/getMeet", GetMeet);
Router.use("/getProfile", GetProfile);
Router.use("/signIn", SignIn);
Router.use("/signUp", SignUp);

export default Router;
