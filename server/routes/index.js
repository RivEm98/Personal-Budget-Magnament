var express = require('express');
var router = express.Router();
let controllers = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', controllers.dataViews);

module.exports = router;
