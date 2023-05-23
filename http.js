const http = require("node:http");
const fs = require("node:fs");

const test = {
  name: "first",
  email: "first@email.com",
};

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("./index.html").pipe(res);
    //   res.end(JSON.stringify(test));
  }
});

server.listen(3000, () => console.log("Server running on 3000"));
