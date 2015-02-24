// server.js

// set up ======================================================================
var express  		= require('express');
var app      		= express();
var port     		= process.env.PORT || 8080;
var mongoose 		= require('mongoose');
var fs 				= require('fs');
var hbs 			= require('hbs');
var morgan       	= require('morgan');
var bodyParser		= require('body-parser');

var admin 			= require('./app/admin.js'); 
var blips			= require('./app/blip-logic.js');
var utils 			= require('./app/utils.js');


// configuration ===============================================================
if (process.env.dbconn != undefined) {  // connect to our database
	mongoose.connect(process.env.dbconn);
} else {
	var config = require('./config/database.js');
	mongoose.connect(config.dbconn); 
}

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('hbs').__express);
app.set('view engine', 'html');
app.use(express.static(__dirname));

// protect admin area with basic auth
var username = 'admin';
var password = 'password';
if (process.env.adminpassword != undefined) {
	password = process.env.adminpassword;
}
app.use('/admin', utils.basicAuth(username, password));


// routes ======================================================================
require('./app/routes.js')(app, admin, blips, utils); // load our routes and pass in our app 


// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);