import User from "../model/user.js";

/////////////////////
//  USER SERVICES
/////////////////////

export const deleteAllUsers = async () => {
  try {
    const result = await User.deleteMany({});
    console.log('All users deleted:', result);
  } catch (err) {
    console.error('Error deleting posts:', err);
  }
};

export const createUser = async (user) => {
  try {
    const createdUser = await User.create(user);
    console.log('User created:', createdUser);
    return createdUser;
  } catch (err) {
    console.error('Error creating User:', err);
  }
};

export const findUserByUsername = async (username) => {
  try {
      const user = await User.find({username: username});
      console.log('Found User:', username, "\n", user);
      return user;
  } catch (err) {
      console.error('Error finding user by username:', err);
  }
};

export const unfollowUser = async (username, usernameToFollow) => {
  try {
      const user = await User.updateOne(
          { username: username }, // Filter to find the specific post
          { $pull: { following: usernameToFollow } } // Use $push to add to the array
      );
      console.log('User:', username, ' Un-Followed user:', usernameToFollow);
      return user;
  } catch (err) {
      console.error('Error adding hashtag:', err);
  }
};

export const followUser = async (username, usernameToFollow) => {
  try {
      const user = await User.updateOne(
          { username: username }, // Filter to find the specific post
          { $push: { following: usernameToFollow } } // Use $push to add to the array
      );
      console.log('User:', username, ' Followed user:', usernameToFollow);
      return user;
  } catch (err) {
      console.error('Error adding hashtag:', err);
  }
};

/////////////////////
//  TEST USERS
/////////////////////

export const createTestUsers = async() => {
  //CREATE test users
  await createUser(
     {
         username: '@BrandonK',
         email: 'bk@test.com',
         password: 'bkpass',   
         following: ['@DoctorJ','@JrSenior']
     }
 );

 await createUser(
     {
         username: '@DoctorJ',
         email: 'dj@test.com',
         password: 'djpass',   
         following: ['@BrandonK','@JrSenior']
     }
 );

 await createUser(
     {
         username: '@MrMister',
         email: 'mm@test.com',
         password: 'mmpass',   
         following: ['@JrSenior','@MrMister']
     }
 );

 await createUser(
     {
         username: '@JrSenior',
         email: 'js@test.com',
         password: 'jspass',  
         //following: ['@BrandonK','@MrMister'] 
     }
 );
}


// export const getUserByemail = async (email) => {
//   const user = await User.find({ email });
//   return user;
// };

// export const createNewUser = async (userData) => {
//   await User.create(userData);
// };

// export const findUserAndUpdate = async (userEmail, userUpdatedData) => {
//   console.log(`hi`)
//   console.log(userEmail, userUpdatedData)
//   await User.findOneAndUpdate({ userEmail }, userUpdatedData);
// };
