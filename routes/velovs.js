var router = require('express').Router();
var velov = require('./../models/velovs');


router.get('/', (req, res) => {
    res.render('velovs/index.html')
});


module.exports = router;

