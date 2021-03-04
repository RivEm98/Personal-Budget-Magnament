const db = require('../database/models')

const {check ,body} = require('express-validator');

module.exports = [

    check('name')
    .isLength({
        min:1
    })
    .withMessage('You must enter a name'),

    check('email')
    .isEmail()
    .withMessage('You must enter a email'),

    body('email')
    .custom(function(value){
        return db.Users.findOne({
            where:{
                email:value
            }
        })
        .then(user=>{
            if(user){
                return Promise.reject('This email is already registered')
            }
        })
    }),

    check('password')
    .isLength({
        min:6,
        max:12
    })
    .withMessage('Password must be between 6 and 12 characters')
]