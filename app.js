var http = require("http");
var dateTime = require("./dateModule");
var fs = require("fs");

http.createServer(function(req, res) {
    // res.writeHead(200, {"Content-type": "text/plain"});
    // res.end("Hello World. It is right now " + dateTime.dateTime() + req.url);
    fs.readFile("index.html", function(err, data) {
        res.writeHead(200, {"Content-type": "text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8080);