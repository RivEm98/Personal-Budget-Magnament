const db = require('../database/models');

const {check,validationResult,body} = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Enter an email'),

    body('email')
    .custom(function(value){
       return db.Users.findOne({
           where:{
                email:value
            }
        })
       .then(user=>{
            if(!user){
                return Promise.reject('The user is not registered')
            }
       })
    }),
    
    body('password')
    .custom(function(value,{req}){
        
        return db.Users.findOne({
            where:{
                 email:req.body.email
             }
         })
        .then(data=>{
            if(!(value == data.dataValues.password)){
                return Promise.reject('Passwords do not match')
            }
        })
        .catch(()=>{
            return Promise.reject("Incorrect password")
        })
    })
]