### Entelo Technical Assignment - Email API
I used Node, Express, Nodemailer, and SendGrid. I also used Heroku to host the API, which can be accessed here: https://gentle-hollows-72257.herokuapp.com

If you want to run the API locally you will need Node. Run ```npm install``` to get the dependencies. Then you can run ```node server.js``` to get the server running. Of course, you would need to change the variables for SendGrid. 


#### Send an Email
```
{
	"to": "youremail@example.com", 
	"subject": "hello", 
	"body": "world" 
}
```

To send an email, send a POST request to https://gentle-hollows-72257.herokuapp.com/email or localhost:3000/email using the json above.

