var Blip = require('../app/models/blip.js');
var mongoose = require('mongoose');
var hbs = require('hbs');
var path = require('path');
var fs = require('fs');


// API ================================================================
	
exports.getBlips = function(req, res) {
	Blip.find(function (err, blips) {
		if (err) return next(err);
		res.send('{ "blips":' + JSON.stringify(blips) + '}');
		//res.json(blips);
	});
};


// CRUD via admin =====================================================
	
exports.list = function(req, res){
	Vote.find({}).exec(function(err, blip){
		res.render('admin/blips.html', {
			title : 'Blips', 
			blip : blip
		});
	});

};

exports.create = function(req, res) {

	console.log('blip data posted: ' + req.body);
	
	var blip = new Blip({
		title: req.body.title,
		area: req.body.area,
		status: req.body.status,
		link: req.body.link
	});

	if (blip.title === '') {
		req.flash('errorMessage', 'Please add a title appropriately');
	} else {
		blip.save(function(err) {
			if (err) return handleError(err);
			console.log("blip created");
			res.send('blip created');
		});
	};
	hbs.registerHelper('equalsTo', function(v1, v2, options) { 
	    if(v1 == v2) { return options.fn(this); } 
	    else { return options.inverse(this); } 
	});
	hbs.registerHelper('ifCond', function(v1, v2, options) {
	  if(v1 === v2) {
	    return options.fn(this);
	  }
	  return options.inverse(this);
	});
};