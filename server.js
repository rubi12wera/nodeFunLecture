/*instll express, body-parser, and cors
create a .gitignore file

*/
/////////////////////////////////
////////////Dependencies////
/////////////////////////////////
var express = require('express');
var bodyparser= require("body-parser");
var cors = require('cors');
var app = express();
var request = require('request');
var twilio = require('twilio')

var port = 3000;
/////////////////////////////////
////////////MIDDLEWARE////
/////////////////////////////////


app.use(express.static('public'));
app.use(bodyparser.urlencoded({
	extended: true
}));
app.use(bodyparser.json());
app.use(cors())

/////////////////////////////////
/////END-POINTS////
/////////////////////////////////
var message = {"message" : "Hellos WOrld"}
app.get('/api/message', function(req, res){
	return res.json(message)
	//return res.send(JSON.stringify{"message" : "Hellos WOrld"})
})
app.post('/api/receive_message', function(req, res){
	console.log(req.body);
	res.send();
})

app.post('/api/send_text_message', function(req, res){
	console.log(req.body);
	res.send();
})








///////LISTENING PORT////////

app.listen(port, function() {
	// body...
	console.log("im listening in port " + port);
})
////////////////