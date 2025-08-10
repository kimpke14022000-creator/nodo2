require('dotenv').config();
const express = require('express');
const path = require('path');
const open = require('open');
const app = express();
const PORT = process.env.PORT || 4000;

app.use('/', express.static(path.join(__dirname, 'frontend_build')));
app.get('/_health', (req,res)=>res.send('ok'));

app.listen(PORT, ()=>{
  console.log('Server started on', PORT);
  open('http://localhost:' + PORT);
});