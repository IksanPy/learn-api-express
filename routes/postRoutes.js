const express = require("express");
const posts = express.Router();
const postsController = require("../controllers/postController");

posts.get("/", postsController.getPosts);
posts.get("/:id", postsController.getPost);
posts.post("/", postsController.addPost);
posts.put("/:id", postsController.editPost);
posts.delete("/:id", postsController.deletePost);

module.exports = posts;
