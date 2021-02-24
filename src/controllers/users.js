const User = require('../schemas/User');
const passUtils = require( '../utils/passwordUtils');


async function createUser(uname, email, password) {
    const user = new User({
        username: uname,
        email: email,
        password: await passUtils.hashPassword(password), 
    }); 
    user.save((err) => {
        if (err) throw(err);
        else return user;
    });
}

module.exports=createUser;
