const express = require('express');
const cors = require('cors');
const router = require('./api/routes/user');

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', router);
app.use(cors());

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err)=>{
   if(err) throw err;
   console.log(`listening to port ${PORT}`);
});





