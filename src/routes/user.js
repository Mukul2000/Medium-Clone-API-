const express = require('express');

const route = express.Router();

//GET current user
route.get('/', (req, res) => {
    res.send("Hitting /api/user")
});

//PATCH current user
route.patch('/', (req, res) => {

});

module.exports = route;

