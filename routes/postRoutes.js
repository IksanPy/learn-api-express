const express = require("express");
const posts = express.Router();
const postsController = require("../controllers/postController");

posts.get("/posts/", postsController.getPosts);
posts.get("/post/:id", postsController.getPost);
posts.post("/create/post", postsController.addPost);
posts.put("/post/:id", postsController.editPost);
posts.delete("/post/:id", postsController.deletePost);

module.exports = posts;
