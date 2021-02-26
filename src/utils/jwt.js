const { resolveInclude } = require('ejs');
const jwt = require('jsonwebtoken');
const User = require('../schemas/User');

//TODO: Move to a config file
const JWT_SECRET = "ihaveasecret";

async function sign(User) {
    return new Promise((resolve,reject) => {
        jwt.sign({
            username: User.username,
            email: User.email,
        }, JWT_SECRET, (err, encoded) => {
            if (err) return reject(err);
            else resolve(encoded);
        });
    })
}

async function decode(token) {
    return new Promise((resolve,reject) => {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err) return reject(err);
            else return resolve(decoded);
        })
    });
}

module.exports = {sign,decode};
