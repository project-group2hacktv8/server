const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);

let position = {
    x: 200,
    y: 200
  };
  
  io.on("connection", socket => {
    socket.emit("position", position);
    socket.on("move", direction => {
      switch (direction) {
        case "left":
          position.x -= 5;
          io.emit("position", position);
          break;
        case "right":
          position.x += 5;
          io.emit("position", position);
          break;
        case "up":
          position.y -= 5;
          io.emit("position", position);
          break;
        case "down":
          position.y += 5;
          io.emit("position", position);
          break;
      }
    });
  });
  
  server.listen(3000, () => {
    console.log("Listening at port 3000...");
  });