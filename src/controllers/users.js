const User = require('../schemas/User');
const passUtils = require('../utils/passwordUtils');
const jwtUtils = require('../utils/jwt');

async function createUser(uname, email, password) {

    //Check data validity
    if (!uname) throw 'username is empty';
    if (!email) throw 'email is empty';
    if (!password) throw 'password is empty';

    //some code here to check if the user already exists.
    //right now this is handled by mongoDB itself
    //but error description is non existent, custom code does
    //it better.
    //TODO: check if user already exiss and throw an 
    //error if it does.
    const temp = await User.findOne({email:email, username: uname}).exec();

    if(temp!==null) throw 'User already exists';

    //create user and send back
    const user = new User({
        username: uname,
        email: email,
        password: await passUtils.hashPassword(password),
    });
    user.token = await jwtUtils.sign(user);
    return user;
}

module.exports = createUser;
