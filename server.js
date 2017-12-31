var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var sendgridTransport = require('nodemailer-sendgrid-transport');

var options = {
	service: 'SendGrid',
	auth: {
		api_user: process.env.USERNAME,
		api_key: process.env.PASSWORD,
	}
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.send('Hello World!'));

var port = process.env.PORT || 3000;

app.listen(port, () => console.log('Example app listening on port 3000!'));

app.get('/email', (req, res) => res.send('Send a POST Request at this endpoint to get an email!'));

app.post('/email', (req, res) => {
	var email = req.body;
	var to = email.to;
	var subject = email.subject;
	var body = email.body;
	
	

	if(!to || !subject || !body){
		res.status(400);
        res.json({
            "error": "Missing value"
        });
    }

	var client = nodemailer.createTransport(sendgridTransport(options));

	var email = {
		from: 'brandonkho1@berkeley.edu',
		to: to,
		subject: subject,
		text: body
		
	};

	client.sendMail(email, function(err, info){
		if(err){
			res.status(400);
	        res.json({
	            "error": "Email not sent"
	        });
		}else{
			res.status(200);
			res.send('Email successfully sent');
		}
	});
});