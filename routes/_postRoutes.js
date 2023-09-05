const express = require("express");
const posts = express.Router();
const postsController = require("../controllers/postController");

posts.get("/", postsController.getPosts);
posts.get("/:id", postsController.getPost);
posts.post("/", postsController.addPost);
posts.put("/:id", postsController.editPost);
posts.delete("/:id", postsController.deletePost);

// another way to make a route

// posts.get("/", (req, res) => {
//   Post.getAll((error, results) => {
//     if (error) {
//       console.error(`Error fetching posts : ${error}`);
//       return res.status(500).json("error masbro");
//     }

//     return res.status(200).json({
//       status: true,
//       data: results,
//     });
//   });
// });

// posts
//   .route("/")
//   .get(postsController.getAllPost())
//   .post((req, res) => {
//     res.send("i am a post method from route posts i made by chaining route");
//   });

module.exports = posts;
