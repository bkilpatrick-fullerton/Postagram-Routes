import { Router } from "express";
//import User from "../model/user.js";
//import checkUser from "../middleware/checkuser.middleware.js";
import authenticate from "../middleware/authenticate.middleware.js";

import {
    createNewPost,
    getPostsByFeed,
    getPostsByUsername,
    getPostsByHashtag,
    removePostById
} from "../controller/post.controller.js";


const postRoute = Router();

postRoute.put("/add-post", authenticate, createNewPost)
postRoute.get("/myfeed",  authenticate, getPostsByFeed);
postRoute.get("/user/:username", authenticate, getPostsByUsername);
postRoute.get("/hashtag/:hashtag", authenticate, getPostsByHashtag);
postRoute.delete("/delete-post", authenticate, removePostById);


export default postRoute;
