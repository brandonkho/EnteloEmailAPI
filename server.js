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

app.get('/email', (req, res) => res.send('Email endpoint working'));

app.post('/email', (req, res) => {
	var email = req.body;
	var to = email.to;
	var subject = email.subject;
	var body = email.body;
	
	

	if(!to){
		res.status(400);
        res.json({
            "error": "Missing recipient"
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
			console.log(err);
		}else{
			console.log('Message sent: ' + info.message);
			res.send('Email successfully sent');
		}
	});
});