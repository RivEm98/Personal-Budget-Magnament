var express = require('express');
var router = express.Router();
let controllers = require('../controllers/users');

/* Validations */
let registerValidator = require('../validators/registerValidator');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.Operations.findAll({include:[{association:"Categories"}]})
  .then((data)=>{
    res.send(data)
  })
});

router.post('/register',registerValidator, controllers.register)

module.exports = router;
