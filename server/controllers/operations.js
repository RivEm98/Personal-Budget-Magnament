const db = require('../database/models')

module.exports = {
    catIncExp:(req,res)=>{
        if(req.body.name == ""){
            return res.send('You must enter a name for the category')
        }else{
            db.Categories.create({
                name:req.body.name
            })
            .then(result=>{
                res.send("successful")
            })
            .catch(errores => {
                res.send('failure')
            })
        }
    },
    getCategories:(req,res)=>{
        db.Categories.findAll()
        .then(response=>{
            res.send(response)
        })
        .catch(error=>{
            res.send(error)
        })
    },
    addIncome:(req,res)=>{
        console.log('///////// DATA FROM OPERATIONS //////////')
        console.log(req.body)
        console.log('/////////////////////////////////////////')
        db.Operations.create({
            user_id: req.body.user,
            category_id: req.body.categorySelect,
            description: req.body.description,
            amount: req.body.amount,
            date: req.body.date,
            operation: req.body.operationSelect
        })
        .then(data=>{
            res.send('successfull')
        })
        .catch(error=>{
            console.log(error)
            res.send(error)
        })
    },
}