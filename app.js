import express from "express";

// route
import postRoute from "./routes/postRoutes.js";

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
app.get("/", (req, res) => {
  res.send(`API is running using port ${port}`);
});
app.use("/api", postRoute);

app.listen(port, () => {
  console.log(`This app now runing using port ${port}`);
});
