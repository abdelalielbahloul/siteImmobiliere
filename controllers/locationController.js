const mongoose = require('mongoose');
const edge = require('edge.js');

exports.index = (req, res) => {
    res.status(200).send(edge.render('location', { villa: 'Notre villa a louer'}));
}