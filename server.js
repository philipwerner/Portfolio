'use strict'
const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3333;

const conString = 'postgres://localhost:5432';
const client = new pg.Client(conString);
client.connect();



app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));



app.use(function(req, res){
  console.log('File not found, 404!!');
})
app.listen(PORT, function(){
  console.log('Portfolio is listening on port ' + PORT);
})
