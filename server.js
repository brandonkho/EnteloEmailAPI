var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.send('Hello World!'));

var port = process.env.PORT || 3000;

app.listen(port, () => console.log('Example app listening on port 3000!'));

app.get('/email', (req, res) => res.send('Email endpoint working'));

app.post('/email', (req, res) => {
	var email = req.body;
	var to = email.to;
	var subject = email.subject;
	var body = email.body;
	
	res.send('Got a POST request');
});