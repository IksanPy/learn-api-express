import * as mysql from "mysql";

export default mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_learnnode",
    port: 3308,
  })
  .connect((error) => {
    error ? console.log(error) : console.log(`Connection successfully.`);
  });

// export default db;
