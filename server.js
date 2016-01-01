var http = require('http');
var fs   = require('fs');
var express = require('express');

function handleRequest(req, res) {
  var extension = req.url.split('.').pop();

  fs.readFile('.' + req.url, function(err,file){
	if(err){
		res.setHeader("Content-Type", "text/html");
		res.statusCode = 200;
		res.write("</h1><br><a href='index.html'>Home</a><br><a href='about.html'>About</a><br><a href='faq.html'>FAQ</a>");
		res.end('I can change the response!');
		return;
		}
		res.setHeader("Content-Type", "text/"+ extension);
		res.write(file);
		res.end();
});


var server = http.createServer(handleRequest);

server.listen(8000, function() {
	console.log("I'm listening on port 8000...")
});