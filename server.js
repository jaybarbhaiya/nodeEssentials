// this module is builtin Nodejs
// used for creating http server for handling requests and response
var http = require("http");

var server = http.createServer(function(request, response) {
	console.log("Got a request");
	response.write("hi");
	response.end();
});

server.listen(3000);
console.log("Listening on http://localhost:3000");