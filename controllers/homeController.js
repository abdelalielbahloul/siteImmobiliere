const mongoose = require('mongoose');

exports.index = (req, res) => {
    res.render('home');
    // res.send('hello')
}