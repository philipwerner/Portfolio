//server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
app.use(express.static('./public'));
app.use(function(req, res){
  console.log('File not found, 404!!');
  res.status(404).sendFile('404.html', {root: './public'});
})
app.listen(PORT, function(){
  console.log('Portfolio is listening on port ' + PORT);
})
