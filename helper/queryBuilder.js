const db = require("../config/db");

exports.queryBuilder = async (query, params = null) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (error, result) => {
      error ? reject(error) : resolve(result);
    });
  });
};
