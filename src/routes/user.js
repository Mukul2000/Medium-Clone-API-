const express = require('express');
const authByToken = require('../middlewares/auth');
const route = express.Router();
const controllers = require('../controllers/users');

//GET current user

//by putting authByToken here, it will run first before running the second one 
//if the token was correctly provided, req.user object should be available,
//else the middleware would have already sent a 401 response back.
route.get('/', authByToken, async (req, res) => {
    
    try {
        const user = await controllers.getUserByEmail(req.user.email);
        if(!user) throw 'no such user found';
        return res.status(200).json({ user });
    }
    catch(e) {
        res.status(404).json({
            errors: { body: [e] },
        })
    }
});

//update current user
route.patch('/', authByToken, async (req, res) => {
    console.log(req.user.email);
    try {
        const updatedUser = await controllers.updateUserDetails(
            req.body.user.username,
            req.body.user.password,
            req.body.user.bio,
            req.user.email
        );
        res.status(200).json({
            updatedUser,
        });
    }
    catch(e) {
        return res.status(401).json({
            body: ['Update failed', e],
        });
    }
});

module.exports = route;

