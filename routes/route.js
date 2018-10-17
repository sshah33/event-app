var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Company = require('../models/Company.js');
var Activity = require('../models/Activity.js');
var Event = require('../models/Event.js');
/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.send('Express REST API');
});

module.exports = router;
*/

/* GET ALL CompanyS */
router.get('/companies', function(req, res, next) {
  Company.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Company BY ID */
router.get('/company/:id', function(req, res, next) {
  console.log("Get company")
  Company.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Company */
router.post('/insertCompany', function(req, res, next) {
  console.log('post hua');
  console.log(req.body);
  Company.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* UPDATE Company */
/*
router.put('updateCompany/:id', function(req, res, next) {
  Company.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
*/

/* DELETE Company */
/*
router.delete('deleteCompany/:id', function(req, res, next) {
  Company.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
*/

router.get('/activities', function(req, res, next) {
  Activity.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Avtivity BY ID */
router.get('/activity/:id', function(req, res, next) {
  console.log("Get activity")
  Activity.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Activity */
router.post('/insertActivity', function(req, res, next) {
  console.log('post hua');
  console.log(req.body);
  Activity.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET ALL Event */
router.get('/events', function(req, res, next) {
  Event.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Event BY ID */
router.get('/event/:id', function(req, res, next) {
  console.log("Get event")
  Event.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Event */
router.post('/insertEvent', function(req, res, next) {
  console.log('post hua');
  console.log(req.body);
  Event.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});




module.exports = router;
