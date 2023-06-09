const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');
const {init}=require("./app/db/db.js")
let port=process.env.PORT

//uso de cors
app.use(cors());
app.use(cookieParser());

//para los archivos estaticos
app.use(express.static("public"));


//routes
app.use(require("./app/routes/rutas_generales.js"));
app.use(require("./app/routes/rutas_usuarios.js"));


//iniciar app
async function iniciar(){
    try{
        await init()
        app.listen(port);
        console.log(`conectado puerto ${port}`)
    } catch (err){
        console.log(err)
    }
}

iniciar()