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

const DBNAME = 'bktest'

const mongoConnect = async () => {
    await mongoose.connect("mongodb+srv://onaveryspecialepisode:XHhhshSETuLaFXmt@cpsc499-lads.czvu4.mongodb.net/" + DBNAME + "?retryWrites=true&w=majority&appName=CPSC499-LADS");
    console.log(`DB connected`);
  };
  
// //USER SERVICES
// const deleteAllUsers = async () => {
//     try {
//       const result = await User.deleteMany({});
//       console.log('All users deleted:', result);
//     } catch (err) {
//       console.error('Error deleting posts:', err);
//     }
// };

// const createUser = async (user) => {
//     try {
//       const createdUser = await User.create(user);
//       console.log('User created:', createdUser);
//     } catch (err) {
//       console.error('Error creating User:', err);
//     }
// };

// const findUserByUsername = async (username) => {
//     try {
//         const posts = await User.find({username: username});
//         console.log('Found User:', username, "\n", posts);
//     } catch (err) {
//         console.error('Error finding user by username:', err);
//     }
// };

// const unfollowUser = async (username, usernameToFollow) => {
//     try {
//         const user = await User.updateOne(
//             { username: username }, // Filter to find the specific post
//             { $pull: { following: usernameToFollow } } // Use $push to add to the array
//         );
//         console.log('User:', username, ' Un-Followed user:', usernameToFollow);
//     } catch (err) {
//         console.error('Error adding hashtag:', err);
//     }
// };

// const followUser = async (username, usernameToFollow) => {
//     try {
//         const user = await User.updateOne(
//             { username: username }, // Filter to find the specific post
//             { $push: { following: usernameToFollow } } // Use $push to add to the array
//         );
//         console.log('User:', username, ' Followed user:', usernameToFollow);
//     } catch (err) {
//         console.error('Error adding hashtag:', err);
//     }
// };


// //POSTS SERVICES
// const deleteAllPosts = async () => {
//     try {
//       const result = await Post.deleteMany({});
//       console.log('All posts deleted:', result);
//     } catch (err) {
//       console.error('Error deleting posts:', err);
//     }
// };

// const deletePostById = async (postId) => {
//     try {
//         //const objectId = new mongoose.Types.ObjectId(postId);

//         //const result = await Post.deleteOne({_id: objectId});
//         const result = await Post.findByIdAndDelete(postId);
//         console.log('Deleted post:', result);
//     } catch (err) {
//       console.error('Error deleting post by ID:', err);
//     }
// };

// const createPost = async (post) => {
//     try {
//       const createdPost = await Post.create(post
//     );
//       console.log('Post created:', createdPost);
//     } catch (err) {
//       console.error('Error creating post:', err);
//     }
// };

// const findPostsByUsername = async (username) => {
//     try {
//         const posts = await Post.find({username: username});
//         console.log('Found posts for user:', username, "\n", posts);
//     } catch (err) {
//         console.error('Error finding posts by username:', err);
//     }
// };

// const findPostsByHashtag = async (hashtag)  => {
//    try {
//         const posts = await Post.find({hashtags: {$in: [hashtag]}});
//         console.log('Found posts for hashtag:', hashtag, "\n", posts);
//     } catch (err) {
//         console.error('Error finding posts by hashtag:', err);
//     }
// };

// const findPostsByFeed = async (username)  => {
//     try {
//         //get current user
//         const user = await User.findOne({username: username});
//         console.log('Feed user: ', user);
//         const followingArray = user.following;
//         console.log("followingArray: ", followingArray);
        
//         const posts = await Post.find({username: {$in: user.following}});
//          console.log('Found feed posts from users:', user.following, "\n", posts);
//      } catch (err) {
//          console.error('Error finding posts by hashtag:', err);
//      }
//  };
   
  
// const createTestUsers = async() => {
//      //CREATE test users
//      await createUser(
//         {
//             username: '@BrandonK',
//             email: 'bk@test.com',
//             password: 'bkpass',   
//             following: ['@DoctorJ','@JrSenior']
//         }
//     );

//     await createUser(
//         {
//             username: '@DoctorJ',
//             email: 'dj@test.com',
//             password: 'djpass',   
//             following: ['@BrandonK','@JrSenior']
//         }
//     );

//     await createUser(
//         {
//             username: '@MrMister',
//             email: 'mm@test.com',
//             password: 'mmpass',   
//             following: ['@JrSenior','@MrMister']
//         }
//     );

//     await createUser(
//         {
//             username: '@JrSenior',
//             email: 'js@test.com',
//             password: 'jspass',  
//             //following: ['@BrandonK','@MrMister'] 
//         }
//     );
// }

// const createTestPosts = async() => {
//     //CREATE test posts
//     await createPost(
//         {
//             postbody: "This is @BrandonK's 1st post",
//             username: "@BrandonK",
//             hashtags: ["eggs", "bacon"]
//         }
//     );

//     await createPost(
//         {
//             postbody: "This is a @BrandonK's 2nd post",
//             username: "@BrandonK",
//             hashtags: ["eggs", "toast"]
//         }
//     );

//     await createPost(
//         {
//             postbody: "This is @DoctorJ's 1st post",
//             username: "@DoctorJ",
//             hashtags: ["toast","coffee"]
//         }
//     );

//     await createPost(
//         {
//             postbody: "This is @DoctorJ's 2nd post",
//             username: "@DoctorJ",
//             hashtags: ["coffee","pancakes"]
//         }
//     );

//     await createPost(
//         {
//             postbody: "This is @MrMister's 1st post",
//             username: "@MrMister",
//             hashtags: ["eggs","coffee"]
//         }
//     );

//     await createPost(
//         {
//             postbody: "This is @MrMister's 2nd post",
//             username: "@MrMister",
//             hashtags: ["bacon","coffee"]
//         }
//     );

//     await createPost(
//         {
//             postbody: "This is a @JrSeniors 1st post",
//             username: "@JrSenior",
//             hashtags: ["eggs","pancakes"]
//         }
//     );

//     await createPost(
//         {
//             postbody: "This is a @JrSeniors 2nd post",
//             username: "@JrSenior",
//             hashtags: ["bacon","toast"]
//         }
//     );
// }

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

