const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const app = express();
const { authSocket, socketServer } = require("./socketServer");

dotenv.config();

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["http://localhost:3000", "https://vuolo.herokuapp.com"],
  },
});

io.use(authSocket);
io.on("connection", (socket) => socketServer(socket));

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("✓ MongoDB Connected");
    else console.log(err);
  }
);

const SERVER_PORT = process.env.SERVER_PORT || 4000;
httpServer.listen(SERVER_PORT, () => {
  console.log(`✓ Listening (:${SERVER_PORT})`);
});

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
