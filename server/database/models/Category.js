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
        },
        date:{
            type: dataTypes.DATEONLY,
            allowNull:true
        },
        user_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }

    let config = {
        tableName: "categories",
        timestamps: false,
        underscored:true
    }

    const Category = sequelize.define(alias,cols,config)

    Category.associate = function(models){
        Category.hasMany(models.Operations,{
            as:"Operations",
            foreingKey:"id_operation"
        }),
        Category.belongsTo(models.Users,{
            as:"Users",
            foreignKey:"user_id"
        })
    }
    return Category
}