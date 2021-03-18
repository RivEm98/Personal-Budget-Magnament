var express = require('express');
var router = express.Router();
let controllers = require('../controllers/users');

/* Validations */
let registerValidator = require('../validators/registerValidator');
let loginValidator = require('../validators/loginValidator');

/* Routes */
router.post('/register',registerValidator, controllers.register)
router.post('/login',loginValidator, controllers.login)

router.get('/all ', controllers.getUsers)
router.get('/operations/balance/:id', controllers.getBalance)
router.get('/operations/:id', controllers.getOperations)
router.get('/operations/:id/10', controllers.getOperationsTen)

module.exports = router;
