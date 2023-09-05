const Post = require("../models/postModel");

const {
  successResponse,
  errorResponse,
} = require("../helper/responseFormatter");

// GET - get All Posts
exports.getPosts = (req, res) => {
  Post.getAll()
    .then((result) => {
      const response = successResponse("Posts fetching all.", result);
      return res.status(200).json(response);
    })
    .catch((error) => {
      const response = errorResponse("An error occured");
      return res.status(500).json(response);
    });
};

// GET - get Post By Id
exports.getPost = async (req, res) => {
  Post.getById(req.params.id)
    .then((post) => {
      !post
        ? res.status(404).json(errorResponse("Post not found"))
        : res.status(200).json(successResponse("Post found", post));
    })
    .catch((error) => {
      res.status(500).json(errorResponse("An error occured"));
    });
};

// POST - Add new Post
exports.addPost = (req, res) => {
  Post.addPost(req.body).then(async (result) => {
    const post = await Post.getById(result.insertId);

    res.status(200).json(successResponse("New post added successfully.", post));
  });
};

// PUT - Edit Post
exports.editPost = (req, res) => {
  const id = parseInt(req.params.id);
  const data = { id, ...req.body };
  const result = Post.editPost(data).then(async (result) => {
    const post = await Post.getById(id);

    res.status(200).json(successResponse("Post updated successfully.", post));
  });
};

// DELETE - delete Post
exports.deletePost = async (req, res) => {
  const id = parseInt(req.params.id);
  const post = await Post.getById(id);

  // post found
  post
    ? Post.deletePost(post.id).then(() => {
        return res
          .status(200)
          .json(successResponse("Post deleted successfully."));
      })
    : res.status(404).json(errorResponse("Data not post found"));
};
