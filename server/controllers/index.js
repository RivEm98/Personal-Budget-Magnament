const db = require('../database/models')

module.exports = {
    dataViews:(req,res)=>{
        let localUser = req.session.user
        console.log("///////////////////////////////////////");
        console.log(localUser)
    }
}