const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersRoute = require('./routes/users');
const userRoute = require('./routes/user');
const articleRoute = require('./routes/articles');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // support json encoded bodies

app.use("/api/articles", articleRoute);
app.use("/api/user", userRoute);
app.use("/api/users", usersRoute);

app.listen(3000, () => {
    console.log("Server started on port 3000...");
})

mongoose.connect("mongodb://localhost:27017/mediumDB", {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true});

