const express = require("express");
const cors = require('cors');
const app = express();
const {sequelize} = require('./db/connection')
const routeLink = require('./routes/link')



const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  }

app.use(express.json())
app.use(cors(corsOptions))
app.use("/",routeLink)

app.listen(process.env.PORT || 3001,async()=>{
    console.log("running server in the port 3001")
    try {
        await sequelize.sync({force:true})
        console.log("se sincronizo con exito los modelos")
    } catch (error) {
        console.log("hubo un error al sincronizar las tablas")
    }
})