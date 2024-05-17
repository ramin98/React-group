const express = require("express");
const cors = require("cors");
const fs = require("fs");

const bodyParser = require("body-parser");
const http = require("http");
const socketIO = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydb",
  password: "ramin1998",
  port: 5432,
});

app.get("/download", function (req, res) {
  let fileName = req.query.nameoffile;
  const file = `${__dirname}/public/upload-folder/${fileName}`;
  res.download(file);
});

io.on("connection", (socket) => {
  socket.on("join chat", (users) => {
    console.log(users);
    let user1 = users.userfirst.toLowerCase();
    let user2 = users.usersecond.toLowerCase();

    pool.query(
      `CREATE TABLE IF NOT EXISTS ${user1}and${user2} (
            id SERIAL PRIMARY KEY,
            message TEXT NOT NULL,
            fromuser VARCHAR(100) NOT NULL,
            photos JSONB,
            nameoffile TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
        `
    );
    console.log("Пользователь подключился");
  });

  socket.on("read chat", (users) => {
    let user1 = users.userfirst.toLowerCase();
    let user2 = users.usersecond.toLowerCase();
    pool.query(`SELECT * FROM ${user1}and${user2}`, (err, response) => {
      if (Array.isArray(response.rows)) {
        socket.emit("chat history", response.rows);
      } else {
        console.log("no");
      }
    });
  });

  socket.on("chat message", (msg) => {
    const photosArray = [];

    if (msg.file.nameoffile) {
      fs.writeFile(
        `./public/upload-folder/${msg.file.nameoffile}`,msg.file.file,
        (err) => {
          console.log(err);
        }
      );
    }

    for (const file of msg.photos) {
      const fileBuffer = Buffer.from(file, "base64");
      photosArray.push(fileBuffer.toString("base64"));
    }
    pool.query(
      `INSERT INTO ${msg.userfirst}and${msg.usersecond} (message, fromUser, photos,nameoffile) VALUES ($1, $2, $3, $4) RETURNING *`,
      [msg.message, msg.fromuser, JSON.stringify(photosArray),msg.nameoffile]
    );
  });

  socket.on("disconnect", () => {
    console.log("Пользователь отключился");
  });
});

server.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
