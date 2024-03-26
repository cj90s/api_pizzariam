const express = require('express');

const path = require('path');

const app = express();

const router = express.Router();

const db = require('./db')

router.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'))
})
app.use(router)

app.listen(3333, ()=>{
    console.log('servidor rodando');
})
