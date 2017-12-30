var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.send('Hello World!'));

var port = process.env.PORT || 3000

app.listen(port, () => console.log('Example app listening on port 3000!'));