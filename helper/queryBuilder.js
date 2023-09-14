import db from "./../config/db.js";

const queryBuilder = (query, params = null) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (error, result) => {
      error ? reject(error) : resolve(result);
    });
  });
};

export default queryBuilder;
