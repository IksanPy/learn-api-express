import express from "express";
import * as postController from "./../controllers/postController.js";

const Post = express.Router();

Post.get("/posts/", postController.getPosts);
Post.get("/post/:id", postController.getPost);
Post.post("/create/post", postController.addPost);
Post.put("/post/:id", postController.editPost);
Post.delete("/post/:id", postController.deletePost);

export default Post;
