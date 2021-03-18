const db = require('../database/models')

module.exports = {
    catIncExp:(req,res)=>{
        if(req.body.name == ""){
            return res.send('You must enter a name for the category')
        }else{
            db.Categories.create({
                name:req.body.name,
                date:req.body.date,
                user_id: req.body.user
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
        const user = req.params.id
        db.Categories.findAll({
            where:{user_id:user},
            include:[{association:"Operations"},{association:"Users"}]
        })
        .then(data=>{
            res.send(data)
        })
    },
    addIncome:(req,res)=>{
        console.log(req.body)
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
            res.send(error)
        })
    },
    deleteOp:(req,res)=>{
        let id = req.params.id
        db.Operations.destroy({
            where:{
                id:id
            }
        })
    }
}