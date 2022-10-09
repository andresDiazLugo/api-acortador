const {Sequelize} = require("sequelize")
require('dotenv').config()
const link = require('../models/Link')


const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/acortador',
{
    logging:false
}
)

link(sequelize)


module.exports={
    ...sequelize.models,
    sequelize
}
