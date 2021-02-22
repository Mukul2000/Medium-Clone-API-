const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const { usersRoute } = require('./routes/users');
const { userRoute } = require('./routes/user');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

//MOUNT routes
app.use('/api/users', usersRoute);
app.use('/api/user', userRoute);

app.listen(3000, () => {
    console.log("Server started on port 3000...");
})

mongoose.connect("mongodb://localhost:27017/mediumDB", {useNewUrlParser:true, useUnifiedTopology:true});

