const express = require("express");
const posts = express.Router();
let conection = require("../config/db");

posts
  .route("/")
  .get((req, res) => {
    conection.query("SELECT * FROM posts", (err, rows) => {
      if (err) {
        return res.status(500).json({
          status: false,
          message: "Internal server error",
        });
      }

      return res.status(200).json({
        status: true,
        message: "Fetch all data posts successfully.",
        data: rows,
      });
    });

    // res.send("i am a get method from posts route i made by express.Router");
  })
  .post((req, res) => {
    res.send("i am a post method from route posts i made by chaining route");
  });

module.exports = posts;
