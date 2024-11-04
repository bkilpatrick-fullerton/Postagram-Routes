//import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";

//import Post from "./model/post.js";
import {
    deleteAllPosts,
    deletePostById,
    createPost,
    findPostsByUsername,
    findPostsByHashtag,
    findPostsByFeed,
    createTestPosts
  } from "../services/post.service.js";

export const createNewPost = async (req, res) => {
    try {
      const post = req.body;
      const newPost = await createPost(post);
      res.status(200).json({posts: newPost});
    } catch (err) {
      console.log(err);
    }
};

export const getPostsByFeed = async (req, res) => {
  try {
    const username = req.body.username;
    const posts = await findPostsByFeed(username);
    res.status(200).json({posts});
  } catch (err) {
    console.log(err);
  }
};

export const getPostsByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const posts = await findPostsByUsername(username);
    res.status(200).json({posts});
  } catch (err) {
    console.log(err);
  }
};

export const getPostsByHashtag = async (req, res) => {
  try {
    const hashtag = req.params.hashtag;
    const posts = await findPostsByHashtag(hashtag);
    res.status(200).json({posts});
  } catch (err) {
    console.log(err);
  }
};

export const removePostById = async (req, res) => {
  try {
    const _id = req.body._id;
    const deletedPost = await deletePostById(_id);
    res.status(200).json({posts: [deletedPost]});
  } catch (err) {
    console.log(err);
  }
};

