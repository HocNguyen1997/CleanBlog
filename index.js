const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')
const bodyParser = require('body-parser')
var api = require('./src/routers/api.router');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
// register use static 


app.use(express.static('public'))
app.listen(3000, ()=>{
    console.log('App listening on port 3000')
})

app.use('/user', api);

