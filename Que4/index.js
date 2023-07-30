const WebSocket = require("ws");
var ChatbotModule = require("./chatboatModule");
var http = require("http");
var url = require("url");

var st = require("node-static");

var fileServer = new st.Server("./files");

var httpserver = http
  .createServer(function (request, response) {
    request
      .on("end", function () {
        var get = url.parse(request.url, true).query;
        fileServer.serve(request, response);
      })
      .resume();
  })
  .listen(8000, function () {
    console.log(new Date() + " Server is listening on port 8000");
  });

const wss = new WebSocket.Server({ server: httpserver });

wss.on("connection", function (ws) {
  console.log("Client connected");

  ws.on("message", (message) => {
    const reply = ChatbotModule.ChatbotReply(message);
    ws.send(reply);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
