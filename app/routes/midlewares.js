const jwt = require("jsonwebtoken");
const path = require("path");
const multer = require("multer");

require("dotenv").config();

//funcion para tener la informacion del token
async function perfil(token) {
  if (!token) {
    return "";
  }
  try {
    const decodedToken = await jwt.verify(token, process.env.SECRETO);
    return decodedToken;
  } catch (err) {
    console.log(err);
    return "";
  }
}

// Configurar el middleware de multer

//perfil
const storagePerfil = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadImagePerfil = multer({
  storagePerfil,
  limits: { fileSize: 5000000 }, //5mb
}); //campo del form
//foto autos
const storageAuto= multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadImageAuto = multer({
  storageAuto,
  limits: { fileSize: 5000000 }, //5mb
});
////
module.exports = { perfil, uploadImagePerfil, uploadImageAuto };