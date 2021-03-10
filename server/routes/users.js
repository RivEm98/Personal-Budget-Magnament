var express = require('express');
var router = express.Router();
let controllers = require('../controllers/users');

/* Validations */
let registerValidator = require('../validators/registerValidator');
let loginValidator = require('../validators/loginValidator');

/* Routes */
router.post('/register',registerValidator, controllers.register)
router.post('/login',loginValidator, controllers.login)

router.get('/get/users', controllers.getUsers)
router.get('/get/operations/:id', controllers.getOperations)

module.exports = router;
