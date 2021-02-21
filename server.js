const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/mediumDB", {useNewUrlParser:true, useUnifiedTopology:true});
