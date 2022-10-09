const {DataTypes} = require("sequelize")

module.exports = sequelize=>{
    sequelize.define('Link',{
        url:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                isUrl: true
            }
        },
        shortener:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    })
}
