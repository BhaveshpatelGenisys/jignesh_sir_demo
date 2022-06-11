var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function (req, res, next) {
  res.render('pages/login.ejs');
});

router.get('/', function (req, res, next) {
  res.render('pages/index');
});

module.exports = router;
