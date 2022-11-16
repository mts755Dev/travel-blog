import express from "express";
import { getAllUser, signin, signup } from "../controllers/user-controller.js";

const userRouter = express.Router();
userRouter.get("/", getAllUser);
userRouter.post("/signup", signup);
userRouter.post("/signin", signin)
export default userRouter;
