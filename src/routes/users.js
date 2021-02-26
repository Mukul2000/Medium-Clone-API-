const express = require('express');
const mongoose = require('mongoose');
const userControllers = require('../controllers/users.js');
const User = require('../schemas/User.js');

const route = express.Router();
// /api/users/login to login user
route.post('/login', async (req, res) => {
    try {
        const email = req.body.user.email;
        const password =  req.body.user.password;
        const user = await userControllers.loginUser(email,password);
        return res.status(200).json({
            user
        })
    }
    catch(err) {
        res.status(422).json({
            errors: {
                body: ['Login failed', err],
            }
        });
    }
});


// /api/users to register a user
route.post('/', async (req, res) => {
    const username = req.body["user"].username;
    const email = req.body["user"].email;
    const password = req.body["user"].password;

    try {
        const user = await userControllers.createUser(username, email, password);
        user.save();
        res.status(201).json({
            "user": {
                "email": user.email,
                "username": user.username,
                "token": user.token,
            }
        });
    }
    catch (err) {
        res.status(422).json({
            errors: {
                body: ['Could not create user', err],
            }
        });
    }
});

module.exports = route;
