const express = require('express');
const mongoose = require('mongoose');
const createUser = require('../controllers/users.js');
const User = require('../schemas/User.js');

const route = express.Router();
// /api/users/login to login user
route.post('/login', (req, res) => {

});


// /api/users to register a user
route.post('/', async (req, res) => {
    const username = req.body["user"].username;
    const email = req.body["user"].email;
    const password = req.body["user"].password;
    const user = await createUser(username, email, password);
    user.save((err) => {
        if (err) {
            res.status(422).json({
                errors: {
                    body: ['Could not create user', err],
                }
            });

        }
        else {
            res.status(201).json({
                "user": {
                    "email": user.email,
                    "username": user.username
                }
            });
        }
    });



});

module.exports = route;
