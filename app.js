const express = require("express");
const app = express();
const port = 3000;

// config
const { connection } = require("./config/db");

// route
const users = require("./routes/users");
const posts = require("./routes/posts");

app.use("/users", users);
app.use("/posts", posts);

app.use("/", (req, res) => {
  res.send(
    "You are in page 404 sir, This called middleware, i don't know how this code working, but i know when i am use this code"
  );
});

app.listen(port, () => {
  console.log(`This app now runing using port ${port}`);
});
