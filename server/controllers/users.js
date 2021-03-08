const db = require('../database/models')
const bcrypt = require('bcrypt');
const {validationResult, body} = require('express-validator');

module.exports = {
    register:(req,res)=>{
        let errors = validationResult(req);

        if(errors.isEmpty()){

            db.Users.create(
                {
                    name: req.body.name.trim(),
                    email: (req.body.email).trim(),
                    /* password: bcrypt.hashSync(req.body.password, 10) */
                    password: req.body.password
                }
            )
            .then(result=>{
                res.send("successful")
            })
            .catch(errores => {
                res.send('error creating a non-existent user')
            })
        }else{
            res.send({
                errors:errors.mapped(),
                old:req.body
            })
        }
    },
    login:(req,res)=>{
        let errors = validationResult(req);
        
        if(!errors.isEmpty()){
            res.send({
                errors: errors.mapped(),
                old:req.body,
                user:req.session.user
            })
        }else{
            db.Users.findOne({
                where:{
                    email:req.body.email
                }
            })
            .then(data => {
                
                req.session.user = {
                    id:data.id,
                    name:data.name,
                    email:data.email,
                }

                res.locals.user = req.session.user
                
                res.send({data:req.session.user})
            })
        }
    },
    getUsers:(req,res)=>{
        db.Users.findAll()
        .then(data=>{
            res.send(data)
        })
    }
}