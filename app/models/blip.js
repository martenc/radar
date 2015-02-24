// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blipSchema = new Schema({ 
	title: String,
	area: String,
	status: String,
	link: String
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Blip', blipSchema);
