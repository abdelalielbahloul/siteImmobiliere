const mongoose = require('mongoose');
const edge = require('edge.js')



exports.index = (req, res) => {
    // res.send('hello')
    res.send(edge.render('home', { username: 'EL BAHLOUL Abdelali' }))

}