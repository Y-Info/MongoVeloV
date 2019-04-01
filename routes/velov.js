var router = require('express').Router();
var mongoose = require('mongoose');

var velov = require('../models/velov');


router.get('/', (req, res) => {
    velov.find({}).then(velov => {
        res.render('velov/index.html', {velov: velov })
    });
});


module.exports = router;

