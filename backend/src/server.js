
//imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');

const routes = require("./routes");

const app = express();
mongoose.connect('mongodb+srv://brenomaia:brenomaia@oministack-defzi.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
app.use(cors())
app.use(express.json()); // seta que as requisições serão do formato JSON
app.use('/files', express.static(path.resolve(__dirname,"..","uploads")));
app.use(routes);
//passar a porta que você quer que a aplicação execute
app.listen(3333);
