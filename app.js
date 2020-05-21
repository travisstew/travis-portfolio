const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

//body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.listen(PORT,function () { 
  console.log('listening on port ' + PORT);
 });