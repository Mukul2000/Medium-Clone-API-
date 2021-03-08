const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRoute = require('./routes/users');
const userRoute = require('./routes/user');
const articleRoute = require('./routes/articles');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // support json encoded bodies

app.use("/api/articles", articleRoute);
app.use("/api/user", userRoute);
app.use("/api/users", usersRoute);
app.use(cors(), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000...");
})

mongoose.connect("mongodb+srv://admin_mukul:righthandmiddlefingertop@conduitcluster.aca6i.mongodb.net/mediumDB", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

