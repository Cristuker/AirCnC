const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path')

mongoose.connect('mongodb+srv://cristuker:136crcc12@aircnc-gszt9.mongodb.net/aircnc?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//get, post , put, delete
//request.query ou req.query = Acessar query params (para filtros)
//request .params = Acessar route params (para edição,delete) put
//request.body = Acessar corpo da requisição(criação edicção de registro)
app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

app.listen(3333);

