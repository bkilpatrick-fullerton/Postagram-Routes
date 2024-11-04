import { Router } from "express";
//import User from "../model/user.js";
//import checkUser from "../middleware/checkuser.middleware.js";
import authenticate from "../middleware/authenticate.middleware.js";

import {
  signup,
  login,
  follow,
  unfollow
} from "../controller/user.controller.js";


const userRoute = Router();

userRoute.post("/login", login)
userRoute.put("/signup", signup);
userRoute.post("/follow/", authenticate, follow);
userRoute.post("/unfollow/", authenticate, unfollow);

export default userRoute;
