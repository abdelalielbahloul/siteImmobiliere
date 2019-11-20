const mongoose = require('mongoose');
const edge = require('edge.js');

exports.index = (req, res) => {
    res.status(200).send(edge.render('contact', { 
        contacts: {
            fullName: 'EL BAHLOUL Abdelali',
            email: 'elbahloulabdelali@gmail.com',
            message: 'Voici un message que j\'ai vous a laisser sur la boite mail'
        }
    }));
}

exports.create = (req, res) => {
    res.send({ message: "Merci de nous contacter" });
}