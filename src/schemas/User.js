import mongoose from 'mongoose';

const userSchema = mongoose.model({
    email: String,
    // token: String, //do it later when JWT is put up
    username: String,
    bio: String,
    image: String,
});

export default userSchema;



// {
//     "user": {
//       "email": "jake@jake.jake",
//       "token": "jwt.token.here",
//       "username": "jake",
//       "bio": "I work at statefarm",
//       "image": null
//     }
//   }