const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const path = require('path')
const edge = require('edge.js')


// import all routes
const homeRouter = require('./routes/homeRouter');
const venterRouter = require('./routes/venteRouter');
const contactRouter = require('./routes/contactRouter');
const locationRouter = require('./routes/locationRouter');

// connection to mongoDB


// difine all middlwares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
edge.registerViews(path.join(__dirname, './resources/views'))

// difine all urls available 
app.use('/', homeRouter)
app.use('/vente', venterRouter);
app.use('/location', locationRouter);
app.use('/contact', contactRouter);


// handle errors for any routes doesan't exists
app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, PUT, DELETE, PATCH, POST');
        return res.status(200).json({});
    }

    next();
});
// handl error for not found url and passed the error to next middlware
app.use( (req, res, next) => {
    const err = new Error('404-Not found');

    res.status = 404;
    next(err)
});
//check the nature off err if it's 404 we return 404 else 500
app.use( (err, req, res, next) => {

    res.status = err.status || 500;
    res.send({
        error: err.message
    });
});

module.exports = app;
