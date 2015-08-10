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
var twilio = require('twilio');
	// Twilio Credentials 
var accountSid = ''; 
var authToken = ''; 
 
//require the Twilio module and create a REST client 
var client = twilio(accountSid, authToken); 

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
var message = {"message" : "Hello WOrld"}
app.get('/api/message', function(req, res){
	return res.json(message)
	//return res.send(JSON.stringify{"message" : "Hellos WOrld"})
})
/*app.post('/api/receive_message', function(req, res){
	console.log(req.body);
	res.send();
})*/

app.post('/api/send_text_message', function(req, res){
	console.log(req.body.message);

 	/* .messages.create = request.post("https://" + accountSid + ":" + authToken + '@api.twilio.com/2010-04-01/Accounts/' + accountSid + '/')*/
 
client.messages.create({ 
	to: "8017555754", 
	from: "+19292297824",    
}, function(err, message) { 
	console.log(message.sid); 
});

	res.send();
})








///////LISTENING PORT////////

app.listen(port, function() {
	// body...
	console.log("im listening in port " + port);
})
////////////////