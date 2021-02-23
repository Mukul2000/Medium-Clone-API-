const User = require('../schemas/User');

function createUser(uname, email) {
    const user = new User({
        username: uname,
        email: email
    }); 
    return user;
}

module.exports=createUser;
