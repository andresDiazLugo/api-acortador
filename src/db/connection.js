const {Sequelize} = require("sequelize")
require('dotenv').config()
const link = require('../models/Link')


const sequelize = new Sequelize('postgresql://postgres:2kNAf10GPQif3eIHCHaK@containers-us-west-74.railway.app:7664/railway',
{
    logging:false
}
)


link(sequelize)


module.exports={
    ...sequelize.models,
    sequelize
}
