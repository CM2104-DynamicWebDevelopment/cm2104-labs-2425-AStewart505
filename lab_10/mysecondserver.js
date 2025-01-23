
var http = require('http');
var currentdate = require('./myfirstserver');

http.createServer(function (req, res) {

 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("That data and time are currently: "  + currentdate,myDateTine());
 res.end('Hello World!');
 
}).listen(8080);