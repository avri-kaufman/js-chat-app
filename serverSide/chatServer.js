const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let CONNECTED_USERS = {};

app.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/avika/Desktop/gettJob/projects/chatApplication/clientSide/pages/index.html"
  );
});

app.use(express.urlencoded({ extended: true }));
app.post("/chat", (req, res) => {
  const name = req.body.name;
  res.sendFile(
    "C:/Users/avika/Desktop/gettJob/projects/chatApplication/clientSide/pages/chat.html"
  );

  io.once("connection", (socket) => {
    CONNECTED_USERS[socket.id] = name;
    socket.broadcast.emit("user connected", `${name}`);

    socket.on("disconnect", () => {
      socket.broadcast.emit("user disconnected", `${name} has left the chat`);
      delete CONNECTED_USERS[socket.id];
    });
  });
});

io.on("connection", (Socket) => {
  Socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
