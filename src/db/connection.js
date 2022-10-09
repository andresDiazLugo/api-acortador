const {Sequelize} = require("sequelize")
require('dotenv').config()
const link = require('../models/Link')


const sequelize = new Sequelize('postgres://admin:zju17zX8idh2KTQyVkwlLgmuEL9RawsU@dpg-cd1h8qen6mprl48ir5h0-a.oregon-postgres.render.com/acortador',
{
    logging:false
}
)

link(sequelize)


module.exports={
    ...sequelize.models,
    sequelize
}
