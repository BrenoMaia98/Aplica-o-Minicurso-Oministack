const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController") 
const SpotController = require("./controllers/SpotController") 
const DashboardController = require("./controllers/DashboardController") 
const BookingController = require("./controllers/BookingController") 
// index  , show , store , update , destroy
//index -> listagem de sessões
//show -> listar uma unica sessão
//store -> criar uma sessão
//update -> alterar uma sessão
//destroy -> remover/deletar uma sessão

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions" , SessionController.store);

routes.post("/spots", upload.single("thumbnail") , SpotController.store);
routes.get("/spots", SpotController.index);

routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);


module.exports = routes;








// <----------------------------------------------------> //
// <-----  Explicação de alguns conceitos    -----------> //
// <----------------------------------------------------> //

//GET --> utilizado para receber uma info do back-end
//POST --> utilizado para criar uma nova informção no back-end
//PUT --> editar alguma informação
//DELETE --> deletar alguma informação

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição,delete)
//req.body = Acessar corpo da requisição (ára criação e edição)







