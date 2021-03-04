module.exports = (sequelize, dataTypes) => {

    let alias = "Users"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password:{
            type: dataTypes.STRING(50),
            allowNull: false
        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    const User = sequelize.define(alias,cols,config)

    User.associate = function(models){
        User.hasMany(models.Operations,{
            as:"Operations",
            foreingKey:"id_operation"
        })
    }
    return User
}