const express = require("express");
const router = express.Router();
const bcrypt =require('bcryptjs')
const bodyParser = require("body-parser");
const jwt=require('jsonwebtoken')
const cookie=require('cookie')
require("dotenv").config();

const {perfil}=require("./midlewares.js")
const {buscarEmail}=require("../controllers/usuarios.js")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


//rutas pages
router.post("/form/login",async (req, res) => {
    const email = req.body.email
    console.log(email)
})

router.post("/form/registro",async (req, res) => {
    const email = req.body.email
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const foto = req.file.filename
    const contrasena = req.body.contrasena
    const cont_encript=await bcrypt.hash(contrasena, 8)


    
})

module.exports = router