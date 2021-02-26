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
    const temp = await User.findOne({ email: email, username: uname }).exec();

    if (temp !== null) throw 'User already exists';

    //create user and send back
    const user = new User({
        username: uname,
        email: email,
        password: await passUtils.hashPassword(password),
    });
    user.token = await jwtUtils.sign(user);
    return user;
}

async function loginUser(email, password) {

    //Check data validity
    if (!email) throw 'email is empty';
    if (!password) throw 'password is empty';

    //check if email exists
    const exists = await User.findOne({email:email}).exec();

    if(exists === null) throw 'No user with this email exists';

    //Check if password matches
    const passMatch = await passUtils.matchPassword(exists.password, password);

    if(!passMatch) throw 'Wrong Password';

    exists.token = await jwtUtils.sign(exists);
    return exists;
}

async function getUserByEmail(email) {
    const doc = await User.findOne({email:email}).exec();

    if(doc===null) throw 'no such user';

    return doc;
}

module.exports = {createUser,loginUser, getUserByEmail};
