const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/health") {
        res.writeHead(200);
        return res.end("OK");
    }

    if (req.url === "/style.css") {
        res.writeHead(200, {"Content-Type": "text/css"});
        return res.end(fs.readFileSync("style.css"));
    }

    if (req.url === "/script.js") {
        res.writeHead(200, {"Content-Type": "application/javascript"});
        return res.end(fs.readFileSync("script.js"));
    }

    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(fs.readFileSync("index.html"));
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});