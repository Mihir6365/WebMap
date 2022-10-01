var express = require('express');
var app = express();
app.use('/public', express.static(__dirname + '/public'));

//redirect '/' to home page
app.get('/', function(req, res) {
    return res.redirect('/home');
});

//Home page
app.get('/home', function(req, res) {
    res.sendFile(__dirname + "/home.html");
});

//path for web2 roadmap
app.get('/web2', function(req, res) {
    res.sendFile(__dirname + "/web2.html");
});
//path to download pdf for web2
app.get('/web2/download', function(req, res) {
    const file = __dirname + '\\downloadables\\web2.pdf';
    res.download(file);
});

//path for web3 roadmap
app.get('/web3', function(req, res) {
    res.sendFile(__dirname + "/web3.html");
});
//path to download pdf for web3
app.get('/web3/download', function(req, res) {
    const file = __dirname + '\\downloadables\\web3.pdf';
    res.download(file);
});


app.listen(8080);
console.log('server running at : ', 'http://localhost:8080/');