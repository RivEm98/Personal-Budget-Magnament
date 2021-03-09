var express = require('express');
var router = express.Router();
let controllers = require('../controllers/operations');

/* Validations */


/* Routes */
router.post('/category/incexp', controllers.catIncExp)
router.post('/add/income', controllers.addIncome)

router.get('/category/get', controllers.getCategories)

module.exports = router;
