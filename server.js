//server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
app.use(express.static('./public'));
app.use(function(req, res){
  console.log('File not found, 404!!');
})
app.listen(PORT, function(){
  console.log('Portfolio is listening on port ' + PORT);
})
