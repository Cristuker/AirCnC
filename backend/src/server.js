const express = require('express');
const routes = require('./routes');
const app = express();


//get, post , put, delete
//request.query ou req.query = Acessar query params (para filtros)
//request .params = Acessar route params (para edição,delete) put
//request.body = Acessar corpo da requisição(criação edicção de registro)

app.use(express.json());

app.use(routes);

app.listen(3333);

