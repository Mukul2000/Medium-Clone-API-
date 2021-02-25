const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    // token: String, //do it later when JWT is put up
    username: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    password: {
        type: String,
        required: true,
    },
    token: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;



// {
//     "user": {
//       "email": "jake@jake.jake",
//       "token": "jwt.token.here",
//       "username": "jake",
//       "bio": "I work at statefarm",
//       "image": null
//     }
//   }