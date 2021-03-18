const db = require('../database/models')
const {format} = require('date-fns')
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
    },
    getOperations:(req,res)=>{
        const user = req.params.id
        db.Operations.findAll({
            where:{user_id:user},
            include:[{association:"Categories"},{association:"user"}]
        })
        .then(data=>{
            res.send(data)
        })
    },
    getOperationsTen:(req,res)=>{
        const user = req.params.id
        db.Operations.findAll({
            where:{user_id:user},
            limit:10,
            order:[['date','DESC']],
            include:[{association:"Categories"},{association:"user"}]
        })
        .then(data=>{
            res.send(data)
        })
    },
    getBalance:(req,res)=>{
        const user = req.params.id

        db.Operations.findAll({
            where:{user_id:user},
            include:[{association:"Categories"},{association:"user"}]
        })
        .then(data=>{
            let d = new Date()
            let dateFormat = format(d,'yyyy-MM')
            let totalIncomes = 0;
            let totalExpenses = 0
            
            let totalIncomeMonth = 0
            let totalExpensesMonth = 0

            data.forEach(element => {
                if(element.operation == 'income'){
                    totalIncomes += element.amount
                    if(element.date.includes(dateFormat)){
                        totalIncomeMonth+=element.amount
                    }
                }else{
                    totalExpenses += element.amount
                    if(element.date.includes(dateFormat)){
                        totalExpensesMonth+=element.amount
                    }
                }

            });
            res.send({totalIncomes,totalIncomeMonth,totalExpenses,totalExpensesMonth})
            
        })
    }
}