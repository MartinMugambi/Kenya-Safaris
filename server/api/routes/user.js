const express = require('express');
const controller = require('../controller/usercontroller');
const router = express.Router();
const upload = require('../middleware/phot');
const pool = require('../../config/database');
const cors = require('cors');

router.get('/user', controller.getAllUsers),

router.get('/posts', controller.getPosts);

router.post('/register', controller.registerUser);

router.post('/login', controller.loginUser);


router.post('/posts', upload.single("picture"), async (req, res) => {
    const picture = req.file.path;
    const user = {
        creator: req.body.creator,
        title: req.body.title,
        description: req.body.description,
        picture: picture,
   }
  
    pool.getConnection((err, connection)=>{
        
       if(err) throw err;
       connection.query('INSERT into posts SET ?', user, (err, result)=>{
          connection.release();
          if(!err){
            res.status(200).json({msg: 'post added successfully'})
           } else {
               res.status(401).json({msg: err});
           }
       }); 
    });
    console.log(picture);
  });

module.exports = router;