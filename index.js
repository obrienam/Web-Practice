// Basic server built from Node first-principles

var http = require('http');
var port = 5003;
var address = 'localhost';
// server

    http.createServer((req, res)=> {
        res.write('Server is active!');
        res.end();
    }).listen(port);