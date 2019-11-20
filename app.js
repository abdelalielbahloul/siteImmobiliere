const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

// import all routes


// connection to mongoDB


// difine all middlwares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// difine all urls available 


// handle errors for any routes doesan't exists


module.exports = app;
