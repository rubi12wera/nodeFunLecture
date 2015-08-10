/*instll express, body-parser, and cors
create a .gitignore file

*/
/////////////////////////////////
////////////Dependencies////
/////////////////////////////////
var express = require('express');
var bodyparser= require("body-parser");

var app = express();

var port = 3000;


app.listen(port, function() {
	// body...
	console.log("im listening in port " + port);
})
////////////////