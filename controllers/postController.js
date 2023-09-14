// const Post = require("../models/postModel");
import * as Post from "./../models/postModel.js";

import {
  successResponse,
  errorResponse,
} from "./../helper/responseFormatter.js";

// GET - get All Posts
export const getPosts = (req, res) => {
  Post.getAll()
    .then((result) => {
      const response = successResponse("Posts fetching all.", result);
      return res.status(200).json(response);
    })
    .catch((error) => {
      const response = errorResponse("An error occured");
      return res.status(500).json(response);
    });
};

// GET - get Post By Id
export const getPost = async (req, res) => {
  Post.getById(req.params.id)
    .then((post) => {
      !post
        ? res.status(404).json(errorResponse("Post not found"))
        : res.status(200).json(successResponse("Post found", post));
    })
    .catch((error) => {
      res.status(500).json(errorResponse("An error occured"));
    });
};

// POST - Add new Post
export const addPost = (req, res) => {
  Post.addPost(req.body)
    .then((result) => {
      return Post.getById(result.insertId);
    })
    .then((post) => {
      res
        .status(200)
        .json(successResponse("New post added successfully.", post));
    })
    .catch((error) => {
      res.status(500).json(errorResponse(error.message));
    });
};

// PUT - Edit Post
export const editPost = (req, res) => {
  const id = parseInt(req.params.id);
  const data = { id, ...req.body };
  const result = Post.editPost(data).then(async (result) => {
    const post = await Post.getById(id);

    res.status(200).json(successResponse("Post updated successfully.", post));
  });
};

// DELETE - delete Post
export const deletePost = async (req, res) => {
  const id = parseInt(req.params.id);
  const post = await Post.getById(id);

  // post found
  post
    ? Post.deletePost(post.id).then(() => {
        return res
          .status(200)
          .json(successResponse("Post deleted successfully."));
      })
    : res.status(404).json(errorResponse("Data not post found"));
};
