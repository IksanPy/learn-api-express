const mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_learnnode",
});

connection.connect((error) => {
  if (!!error) {
    console.log(error);
  } else {
    console.log(`Connection successfully.`);
  }
});

module.exports = connection;
