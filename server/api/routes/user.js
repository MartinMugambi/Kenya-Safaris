const express = require('express');
const controller = require('../controller/usercontroller');
const router = express.Router();

router.get('/user', controller.getAllUsers),

router.get('', (req, res)=>{
    res.send('APP connected');
});

router.post('/register', controller.registerUser);

router.post('/login', controller.loginUser);

module.exports = router;