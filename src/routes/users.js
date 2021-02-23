const express = require('express');
const mongoose = require('mongoose');
const User = require('../schemas/User.js');

const route = express.Router();
// /api/users/login to login user
route.post('/login', (req,res) => {

});


// /api/users to register a user
route.post('/', (req,res) => {
    // console.log(req.body);
    // console.log(req.body);
    const username = req.body["user"].username;
    const email = req.body["user"].email;
    const user = new User({
        username: username,
        email: email
    });
    console.log(user);
    user.save((err) => {
        if(err) res.send("Could not create user");
        else res.send("User created successfully");
    });
});

module.exports=route;
