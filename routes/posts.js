const express = require("express");
const posts = express.Router();

posts
  .route("/")
  .get((req, res) => {
    res.send("i am a get method from posts route i made by express.Router");
  })
  .post((req, res) => {
    res.send("i am a post method from route posts i made by chaining route");
  });

module.exports = posts;
