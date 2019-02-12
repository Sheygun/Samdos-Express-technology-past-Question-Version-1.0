var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// --------------------------csc320 ------------------------------------
router.get('/csc32020180101seo', function(req, res) {
  res.render('questions/csc320/csc320', { title: 'Express' });
});

router.get('/csc32020180101seo1', function(req, res) {
  res.render('questions/csc320/csc320two', { title: 'Express' });
});

router.get('/csc32020180101seo2', function(req, res) {
  res.render('questions/csc320/csc320three', { title: 'Express' });
});

// --------------------------csc332 ------------------------------------
router.get('/error', function(req, res) {
  res.render('questions/unprocessed', { title: 'Express' });
});

router.get('/terms', function(req, res) {
  res.render('terms', { title: 'Express' });
});

router.get('/csc3322018010101seo1', function(req, res) {
  res.render('questions/csc322/csc332', { title: 'Express' });
});

router.get('/csc3322018010102seo1', function(req, res) {
  res.render('questions/csc322/csc332two', { title: 'Express' });
});

router.get('/csc3322018010103seo1', function(req, res) {
  res.render('questions/csc322/csc332three', { title: 'Express' });
});
module.exports = router;
