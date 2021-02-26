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
route.patch('/', async (req, res) => {

});

module.exports = route;

