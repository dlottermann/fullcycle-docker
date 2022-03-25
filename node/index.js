const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Diego Lottermann')`;
const select = `SELECT * FROM people`;

app.get("/", (req, res) => {
  connection.query(sql, (err, result) => {
    if (err) throw err;
    connection.query(select, (error, results, fields) => {
      if (error) throw err;

      let list = "";

      for (let i = 0; i < Object.keys(results).length; i++) {
        list += `${results[i].name}<br>`;
      }

      res.send(`<h1>Full Cycle Rocks!</h1><br>${list}`);
    });
  });
});

app.listen(port, () => {
  console.log("Rodando na porta 3000");
});
