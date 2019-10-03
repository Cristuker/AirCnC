const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb+srv://cristuker:136crcc12@aircnc-gszt9.mongodb.net/aircnc?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//get, post , put, delete
//request.query ou req.query = Acessar query params (para filtros)
//request .params = Acessar route params (para edição,delete) put
//request.body = Acessar corpo da requisição(criação edicção de registro)

app.use(express.json());

app.use(routes);

app.listen(3333);

