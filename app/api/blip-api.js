var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Blip = require('../app/models/blip.js');

/* GET /Blips listing. */
router.get('/', function(req, res, next) {
  Blip.find(function (err, blips) {
    if (err) return next(err);
    res.json(blips);
  });
});

module.exports = router;