var router = require('express').Router();

var velov = require('../models/velov');
var influence = require('../models/influence');
var toilettes_pub = require('../models/toilette_pub');
var touristique = require('../models/touristique');


router.get('/', (req, res) => {
    velov.find({}).then(velov => {
        res.render('velov/index.html', {velov: velov })
    });
});

router.get('/lieux-balade', (req, res) => {
    influence.find({}).then(influence => {
        res.render('influence/index.html', {influence: influence })
    });
});

router.get('/lieux-touristique', (req, res) => {
    touristique.find({}).then(touristique => {
        res.render('touristique/index.html', {touristique: touristique })
    });
});

router.get('/pipi', (req, res) => {
    toilettes_pub.find({}).then(toilettes_pub => {
        res.render('toilette_pub/index.html', {toilettes_pub: toilettes_pub })
    });
});


module.exports = router;

