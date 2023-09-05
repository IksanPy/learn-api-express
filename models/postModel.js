const db = require("../config/db");
const { queryBuilder } = require("../helper/queryBuilder");
/**
 * Table name : posts
 * Columns :
 * id
 * title
 * content
 */

// get all posts
exports.getAll = async () => {
  const result = await queryBuilder("SELECT * FROM posts");
  return result;
};

// get data by id
exports.getById = async (id) => {
  const result = await queryBuilder("SELECT * FROM posts WHERE id =?", [id]);
  return result[0];
};

// add new post
exports.addPost = async (data) => {
  const { title, content } = data;
  const result = await queryBuilder(
    "INSERT INTO posts (title, content) VALUES (?,?)",
    [title, content]
  );

  return result;
};

// edit post
exports.editPost = async (data) => {
  const { id, title, content } = data;
  const result = await queryBuilder(
    "UPDATE posts SET title=?, content =? WHERE id =?",
    [title, content, id]
  );

  return result;
};

// delete data post
exports.deletePost = async (id) => {
  const result = await queryBuilder(`DELETE FROM posts WHERE id=?`, [id]);
  return result;
};
