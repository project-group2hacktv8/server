const express = require("express")();
const http = require("http").Server(express);
const socketio = require("socket.io")(http);

let position = {
    x: 200,
    y: 200
  };
  
  socketio.on("connection", socket => {
    socket.emit("position", position);
    socket.on("move", direction => {
      switch (direction) {
        case "left":
          position.x -= 5;
          socketio.emit("position", position);
          break;
        case "right":
          position.x += 5;
          socketio.emit("position", position);
          break;
        case "up":
          position.y -= 5;
          socketio.emit("position", position);
          break;
        case "down":
          position.y += 5;
          socketio.emit("position", position);
          break;
      }
    });
  });
  
  http.listen(3000, () => {
    console.log("Listening at port 3000...");
  });