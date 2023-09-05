const express = require("express");
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
app.use("/users", require("./routes/users"));
app.use("/posts", require("./routes/postRoutes"));

app.listen(port, () => {
  console.log(`This app now runing using port ${port}`);
});
