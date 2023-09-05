const db = require("../config/db");
const { queryBuilder } = require("../helper/queryBuilder");
/**
 * Table name : posts
 * Columns :
 * id
 * title
 * content
 */

// base func
// const queryBuilder = async (query, params = null) => {
//   return new Promise((resolve, reject) => {
//     db.query(query, params, (error, result) => {
//       error ? reject(error) : resolve(result);
//     });
//   });
// };

// get all posts
exports.getAll = async () => {
  const result = await queryBuilder("SELECT * FROM posts");
  return result;
};

// exports._getAll = async () => {
//   return new Promise((resolve, reject) => {
//     db.query("SELECT * FROM posts", (error, result) => {
//       error ? reject(error) : resolve(result);
//     });
//   });
// };

// anothe way to get data in datbase
// exports.getById = (id, callback) => {
//   db.query(`SELECT * FROM posts WHERE id=${id}`, callback);
// };

// get data by id
exports.getById = async (id) => {
  const result = await queryBuilder("SELECT * FROM posts WHERE id =? LIMIT 1", [
    id,
  ]);
  return result[0];
};
// exports._getById = async (id) => {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "SELECT * FROM posts WHERE id =? LIMIT 1",
//       [id],
//       (error, result) => {
//         error ? reject(error) : resolve(result[0]);
//       }
//     );
//   });
// };

// add new post
exports.addPost = async ({ title, content }) => {
  const result = await queryBuilder(
    "INSERT INTO posts (title, content) VALUES (?,?)",
    [title, content]
  );

  return result;
};

// exports._addPost = ({ title, content }) => {
//   return new Promise((resolve, reject) => {
//     db.query(
//       `INSERT INTO posts (title, content) VALUES (${title},${content})`,
//       (error, result) => {
//         error ? reject(error) : resolve(result);
//       }
//     );
//   });
// };

// delete data post
exports.deletePost = async (id) => {
  const result = await queryBuilder(`DELETE FROM posts WHERE id=?`, [id]);
  return result;
};
// exports._deletePost = (id) => {
//   return new Promise((resolve, reject) => {
//     db.query("DELETE FROM posts WHERE id=?", [id], (error, result) => {
//       error ? reject(error) : resolve(result);
//     });
//   });
// };
