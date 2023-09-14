import queryBuilder from "./../helper/queryBuilder.js";

/**
 * Table name : posts
 * Columns :
 * id
 * title
 * content
 */

// get all posts
export const getAll = async () => {
  const result = await queryBuilder("SELECT * FROM posts");
  return result;
};

// get data by id
export const getById = async (id) => {
  const result = await queryBuilder("SELECT * FROM posts WHERE id =?", [id]);
  return result[0];
};

// add new post
export const addPost = (data) => {
  const { title, content } = data;
  return queryBuilder("INSERT INTO post (title, content) VALUES (?,?)", [
    title,
    content,
  ]);
};

// edit post
export const editPost = async (data) => {
  const { id, title, content } = data;
  const result = await queryBuilder(
    "UPDATE posts SET title=?, content =? WHERE id =?",
    [title, content, id]
  );

  return result;
};

// delete data post
export const deletePost = async (id) => {
  const result = await queryBuilder(`DELETE FROM posts WHERE id=?`, [id]);
  return result;
};
