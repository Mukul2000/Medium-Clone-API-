const User = require('../schemas/User');
const {hashPassword, matchPassword} = require('../utils/passwordUtils');

function createUser(uname, email, password) {
    const user = new User({
        username: uname,
        email: email,
        // password: await hashPassword(password), 
    }); 
    return user;
}

module.exports=createUser;
