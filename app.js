var express = require('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');

mongoose.connect('mongodb://localhost/velovs', { useNewUrlParser: true } );

require('./models/velovs');

var app = express();


app.use('/css', express.static( __dirname + '/node_modules/bootstrap/dist/css'));

app.use('/', require('./routes/velovs'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});


console.log('Test serveur lancee sur le serveur port 3000');
app.listen(3000);
