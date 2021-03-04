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
                    password: bcrypt.hashSync(req.body.password, 10)
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
    registerr:(req,res)=>{
        const name = req.body.username;
        const email = req.body.useremail;
        const password = req.body.userpassword;
        console.log("----------------------------------------------")
        console.log(req.body)
        console.log("----------------------------------------------")
        /* db.Users.create({
            name,
            email,
            password
        })
        .then((data) => {
            console.log(data);
            res.send("successful")
        })
        .catch((error) => res.send(error)); */
    }
}