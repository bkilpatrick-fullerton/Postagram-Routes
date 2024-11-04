//import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {
  deleteAllUsers,
  createUser,
  findUserByUsername,
  unfollowUser,
  followUser,
  createTestUsers
} from "../services/user.service.js";

export const signup = async (req, res) => {
  try {
    const user = req.body;
    await createUser(user);
    res.status(200).json({status: 'user created'})

  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "Something went wrong" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Username:', username);
    console.log('Password:', password);
    const user = await findUserByUsername(username);
    const userPassword = user.password;
    console.log('userPassword:', userPassword);

    if (userPassword === password){
      res.status(200).json({status: 'accepted'});
    }
    else{
      res.status(200).json({status: 'rejected'})
    }
  } catch (err) {
    console.log(err);
  }
};

export const follow = async (req, res) => {
  try {
    const {username, usernameFollowed} = req.body;
    await followUser(username, usernameFollowed);
    res.status(200).json({status: 'user followed'})

  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "Something went wrong" });
  }
};

export const unfollow = async (req, res) => {
  try {
    const {username, usernameFollowed} = req.body;
    await unfollowUser(username, usernameFollowed);
    res.status(200).json({status: 'user unfollowed'})

  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "Something went wrong" });
  }
};


