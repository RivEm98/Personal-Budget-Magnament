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

    }
}