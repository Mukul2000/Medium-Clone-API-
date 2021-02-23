const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    // token: String, //do it later when JWT is put up
    username: String,
    bio: String,
    image: String,
});

const User = mongoose.model("User", userSchema);
module.exports=User;



// {
//     "user": {
//       "email": "jake@jake.jake",
//       "token": "jwt.token.here",
//       "username": "jake",
//       "bio": "I work at statefarm",
//       "image": null
//     }
//   }