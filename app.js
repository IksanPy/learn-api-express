const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

// route
const users = require("./routes/users");
const posts = require("./routes/posts");

// in genaral express not allowing you to access a static file
//  we can use image in express until you defind this code as a middleware
app.use(express.static("public"));
// now all file static in folder public can access

// template engine html
app.engine("html", (filePath, options, callback) => {
  // define the template engine
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // this is an extremely simple template engine
    const rendered = content
      .toString()
      .replace("$name", `${options.name}`)
      .replace("$age", `${options.age}`);
    return callback(null, rendered);
  });
});

app.set("views", "./views");
app.set("view engine", "html");

// this how i create a basic route in express
// in general express
app.get("/", (req, res) => {
  res.send("Hello dude, i am learn nodejs here");
});

app.get("/about", (req, res) => {
  res.send(
    "It is about me, how i am learn nodejs by reading the documentation, and i watching a bit video tutorial in youtube, arrghh my internet is slowly, you can see the jump dino on your screen"
  );
});

app.get("/contact", (req, res) => {
  res.send(
    "Now you in page contact, you want to contact me ?, this my number phone 0895396624150, please write it!, maybe we can learn about nodejs at the same time, now can you seing a joke ?, yes, that my skill writing in english wkwkwkk"
  );
});

app.get("/view/:age", (req, res) => {
  res.render("index", {
    name: "Ahmad Iksan",
    age: req.params.age ? req.params.age : 100,
  });
});

// new route using different way
// now i can use this route, i called it users route
app.use("/users", users);
// am use new route with diffrent way again
app.use("/posts", posts);

app.use("/", (req, res) => {
  res.send(
    "You are in page 404 sir, This called middleware, i don't know how this code working, but i know when i am use this code"
  );
});

app.listen(port, () => {
  console.log(`This app now runing using port ${port}`);
});
