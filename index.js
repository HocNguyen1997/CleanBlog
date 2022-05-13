const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const morgan =require('morgan');
var infor = require('./src/routers/infor.router');
var accounts = require('./src/routers/accounts.router');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(morgan('tiny'))


app.use(express.static('public'))
app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

app.use('/infor',infor);
app.use('/accounts',accounts);

