const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

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

const verivyJwt = (req, res, next) => {
  const token = req.headers["acces token"];
  if (!token) {
    return res.json("We need provide it for next time");
  } else {
    jwt.verify(token, "jwtSecretKey", (err, decoded) => {
      if (err) {
        res.json("Not Authenticated");
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

app.get("/checkauth", verivyJwt, (req, res) => {
  return res.json("Authenticated");
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT * FROM login WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to log in" });
      } else {
        if (result.length > 0) {
          if (password === result[0].password) {
            const id = result[0].id;
            const token = jwt.sign({ id }, "jwtSecretKey", {
              expiresIn: "5m",
            });
            const userData = {
              username: result[0].username,
            };
            res.json({ login: true, token, user: userData });
          } else {
            res.status(401).json({ message: "Wrong email or password" });
          }
        } else {
          res.status(401).json({ message: "Wrong email or password" });
        }
      }
    }
  );
});

app.get("/silet_kemkes", (req, res) => {
  db.query("SELECT * FROM data", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to retrieve data" });
    } else {
      res.json(result);
    }
  });
});

// const util = require("util");
// const query = util.promisify(db.query).bind(db);
// app.get("/silet_kemkes", async (req, res) => {
//   const { table } = req.query;
//   const { id } = req.params;
//   const Nama_data = req.body.Nama_data;
//   const Jumlah = req.body.Jumlah;

//   try {
//     if (table === "peserta_lulus") {
//       const result = await query(
//         "SELECT * FROM peserta_lulus WHERE id = ? AND Nama_data = ? AND Jumlah = ?",
//         [id, Nama_data, Jumlah]
//       );
//       res.json(result);
//     } else if (table === "data") {
//       const result = await query(
//         "SELECT * FROM data WHERE id = ? AND Nama_data = ? AND Jumlah = ?",
//         [id]
//       );
//       res.json(result);
//     } else {
//       res.status(400).json({ message: "Invalid table name" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to retrieve data" });
//   }
// });



app.put("/peserta_lulus/:id", (req, res) => {
  const id = req.params.id;
  const { total_peserta_lulus, peserta_sudah_kembali, peserta_belum_kembali } =
    req.body;

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
