const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = mysql.createConnection({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "silet_kemkes",
});

db.connect((err) => {
  if (err) {
    console.error("Failed to connect to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/silet_kemkes", (req, res) => {
  db.query("SELECT * FROM peserta_lulus", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to retrieve data" });
    } else {
      res.json(result);
    }
  });
});

app.put("/peserta_lulus/:id", (req, res) => {
  const id = req.params.id;
  const total_peserta_lulus = req.body.total_peserta_lulus ;
  const peserta_sudah_kembali = req.body.peserta_sudah_kembali;
  const peserta_belum_kembali= req.body.peserta_belum_kembali;

  db.query(
    "UPDATE peserta_lulus SET total_peserta_lulus = ?, peserta_sudah_kembali = ?, peserta_belum_kembali = ? WHERE id = ?",
    [total_peserta_lulus, peserta_sudah_kembali, peserta_belum_kembali, id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to update data" });
      } else {
        res.status(200).json({ message: "Data updated successfully" });
      }
    }
  );
});



app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
