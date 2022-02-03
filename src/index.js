// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const staticServerPath="./src/public-react";
server.use(express.static((staticServerPath)));

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  const responseSuccess = {
    "sucess": true,
    "cardURL": "https://awesome-profile-cards.herokuapp.com/card"
  }

  const responseError = {
    "sucess": false,
    "error": "Error description"
  }
  if(req.body.name !== '' && req.body.job !== ''){
    res.json(responseSuccess);
  }
  else{
    res.json(responseError)
  }

  //res.json(responseSuccess);
});

server.get("/card/92392982298732823", (req, res) => {

});