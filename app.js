const http = require("http");
http
.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("Hi from Server");

})
.listen(5000);
console.log("server is running");
