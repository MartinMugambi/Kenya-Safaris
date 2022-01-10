const bcrypt = require('bcrypt');
const pool = require('../../config/database');
 
const getAllUsers = (req, res)=>{
    pool.getConnection((err, connection)=>{
         if(err) throw err;
         connection.query('SELECT * from tours', (err, results)=>{
           connection.release();
           if(!err){
               res.send(results);
           } else{
               res.json({msg: 'user not found'});
           }
         });
         
    });
  
}

 async function registerUser (req, res){
    const salt  =  await bcrypt.genSalt()
    const hashedPassword =  await bcrypt.hash(req.body.password, salt);
    
    const user = {
        username: req.body.username,
        password: hashedPassword,
    }
    pool.getConnection((err, connection)=>{
          if(err) throw err;
         connection.query('INSERT into register SET ?', user, (err, results)=>{
              connection.release();
              if(!err){
               res.status(200).json({msg: 'used added successfully'})
              } else {
                  res.status(401).json({msg: err});
              }
         }); 
    });
  }
 

 async function loginUser(req, res){
      const username = req.body.username;
      const password = req.body.password;
    pool.getConnection((err, connection)=>{
        if(err) throw err;
        connection.query('SELECT password from register WHERE username = ?', [username], async (err, results)=>{
            connection.release();
            const hashedPassword = results[0].password;
           
             if(err){
                 res.send(err);
             } else {
                const valid = await bcrypt.compare(password, hashedPassword);
                 valid ? res.send('success') : res.send('password is incorrect');
             }
           
        });
    })
   
  }

module.exports= {
    getAllUsers,
    registerUser,
    loginUser,   
}