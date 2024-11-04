import { mongoose } from "mongoose";
import Post from "./model/post.js";
import User from "./model/user.js";
import {
    deleteAllPosts,
    deletePostById,
    createPost,
    findPostsByUsername,
    findPostsByHashtag,
    findPostsByFeed,
    createTestPosts
  } from "./services/post.service.js";

import {
    deleteAllUsers,
    createUser,
    findUserByUsername,
    unfollowUser,
    followUser,
    createTestUsers
  } from "./services/user.service.js";

import "dotenv/config";

const DB_NAME = 'bktest';

const mongoConnectUrl = process.env.MONGO_CONNECT_URL //Ex: mongodb+srv://<user>:<password>@cpsc499-lads.czvu4.mongodb.net/
const mongoConnectParams = process.env.MONGO_CONNECT_PARAMS //Ex: ?retryWrites=true&w=majority&appName=CPSC499-LADS
const mongoConnectStr = mongoConnectUrl + DB_NAME + mongoConnectParams;

const mongoConnect = async () => {
  await mongoose.connect(mongoConnectStr);
  console.log(`DB connected`);
};
  

const main = async() => {

    //connect to DB
    await mongoConnect();

    try{

        //DELETE all posts then CREATE test Users
        await deleteAllUsers();
        await createTestUsers();


        //DELETE all posts then CREATE a bunch of test Posts
        await deleteAllPosts();
        await createTestPosts();

        //FOLLOW user - test out following and unfollwing
        await followUser('@JrSenior','@BrandonK');
        await followUser('@JrSenior','@MrMister');

        //FOLLOW user
        await unfollowUser('@JrSenior','@MrMister');

        //FIND user by username 
        await findUserByUsername('@BrandonK');

        //FIND posts by username
        await findPostsByUsername('@BrandonK');
        
        //FIND posts by hashtag
        await findPostsByHashtag('toast');

        //DELETE post by id - Note this only works if you don't delete the previous posts. Oviously must be a real objectId
        await deletePostById('6727fc27b0bb85935c02ad74');

        //MAIN FEED - the big one
        await findPostsByFeed('@BrandonK');

    } catch(err) {
        console.log(err);
    }
    finally{
        mongoose.connection.close();
        console.log("DB Connection Closed");
    }
}

//call main loop
main();

