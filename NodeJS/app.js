const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<h1>Welcome Home</h1>")
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<h1>Welcome to About Us Page</h1>")
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/node") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<h1>Welcome to my Node Js project</h1>")
    res.write("</html>");
    return res.end();
  }
});

server.listen(4000);
