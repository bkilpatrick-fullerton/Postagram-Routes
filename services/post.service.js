
import Post from "../model/post.js";
import User from "../model/user.js";

/////////////////////////
//    POSTS SERVICES
/////////////////////////
export const deleteAllPosts = async () => {
    try {
      const result = await Post.deleteMany({});
      console.log('All posts deleted:', result);
      return result;
    } catch (err) {
      console.error('Error deleting posts:', err);
    }
};

export const deletePostById = async (postId) => {
    try {
        //const objectId = new mongoose.Types.ObjectId(postId);

        //const result = await Post.deleteOne({_id: objectId});
        const result = await Post.findByIdAndDelete(postId);
        console.log('Deleted post:', result);
        return result;
    } catch (err) {
      console.error('Error deleting post by ID:', err);
    }
};

export const createPost = async (post) => {
    try {
      const createdPost = await Post.create(post);
      console.log('Post created:', createdPost);
      return createdPost;
    } catch (err) {
      console.error('Error creating post:', err);
    }
};

export const findPostsByUsername = async (username) => {
    try {
        const posts = await Post.find({username: username});
        console.log('Found posts for user:', username, "\n", posts);
        return posts;
    } catch (err) {
        console.error('Error finding posts by username:', err);
    }
};

export const findPostsByHashtag = async (hashtag)  => {
   try {
        const posts = await Post.find({hashtags: {$in: [hashtag]}});
        console.log('Found posts for hashtag:', hashtag, "\n", posts);
        return posts;
    } catch (err) {
        console.error('Error finding posts by hashtag:', err);
    }
};

export const findPostsByFeed = async (username)  => {
    try {
        //get current user
        const user = await User.findOne({username: username});
        console.log('Feed user: ', user);
        const followingArray = user.following;
        console.log("followingArray: ", followingArray);
        
        const posts = await Post.find({username: {$in: user.following}});
        console.log('Found feed posts from users:', user.following, "\n", posts);

        return posts;
     } catch (err) {
         console.error('Error finding Feed posts:', err);
     }
 };

 //////////////////////////
 //     TEST DATA
 //////////////////////////
 export const createTestPosts = async() => {
    //CREATE test posts
    await createPost(
        {
            postbody: "This is @BrandonK's 1st post",
            username: "@BrandonK",
            hashtags: ["eggs", "bacon"]
        }
    );

    await createPost(
        {
            postbody: "This is a @BrandonK's 2nd post",
            username: "@BrandonK",
            hashtags: ["eggs", "toast"]
        }
    );

    await createPost(
        {
            postbody: "This is @DoctorJ's 1st post",
            username: "@DoctorJ",
            hashtags: ["toast","coffee"]
        }
    );

    await createPost(
        {
            postbody: "This is @DoctorJ's 2nd post",
            username: "@DoctorJ",
            hashtags: ["coffee","pancakes"]
        }
    );

    await createPost(
        {
            postbody: "This is @MrMister's 1st post",
            username: "@MrMister",
            hashtags: ["eggs","coffee"]
        }
    );

    await createPost(
        {
            postbody: "This is @MrMister's 2nd post",
            username: "@MrMister",
            hashtags: ["bacon","coffee"]
        }
    );

    await createPost(
        {
            postbody: "This is a @JrSeniors 1st post",
            username: "@JrSenior",
            hashtags: ["eggs","pancakes"]
        }
    );

    await createPost(
        {
            postbody: "This is a @JrSeniors 2nd post",
            username: "@JrSenior",
            hashtags: ["bacon","toast"]
        }
    );
}