const express = require('express');

const path = require('path');

const app = express();

const routes = require('./routes')

const db = require('./db')


app.use(express.json());

app.use('/',routes)

app.listen(3333, () => {
    console.log('servidor rodando')
});



