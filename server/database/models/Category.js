module.exports = (sequelize, dataTypes) => {

    let alias = "Categories"

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
        }
    }

    let config = {
        tableName: "categories",
        timestamps: false
    }

    const Category = sequelize.define(alias,cols,config)

    Category.associate = function(models){
        Category.hasMany(models.Operations,{
            as:"Operations",
            foreingKey:"id_operation"
        })
    }
    return Category
}