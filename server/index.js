const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(express.json());
app.use();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err)=>{
   if(err) throw err;
   console.log(`listening to port ${PORT}`);
});





