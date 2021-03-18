var express = require('express');
var router = express.Router();
let controllers = require('../controllers/operations');

/* Validations */


/* Routes */
router.post('/category/incexp', controllers.catIncExp)
router.post('/add/income', controllers.addIncome)

router.get('/category/:id', controllers.getCategories)

router.put('/:id', controllers.updateOp)
router.delete('/:id', controllers.deleteOp)
router.get('/:id', controllers.operation)

module.exports = router;
