const mysql = require("mysql");
let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_learnnode",
});

db.connect((error) => {
  if (!!error) {
    console.log(error);
  } else {
    console.log(`Connection successfully.`);
  }
});

module.exports = db;
