const express = require('express');
const handlbare = require('express-handlebars');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// import all routes
const homeRouter = require('./routes/homeRouter');

//midellwares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));

app.engine('handlebars', handlbare());
app.set('view engine', 'handlebars');


//difine all url available
app.use('/', homeRouter);


// difine allows headers
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
    // res.render('notFound', {});
    res.send('error');
});

module.exports = app;