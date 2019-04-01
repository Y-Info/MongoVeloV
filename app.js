var express = require('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true } );


var app = express();
console.log(__dirname);

app.use('/css', express.static(__dirname + 'node_modules/bootstrap/dist/css'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
    res.send('Salut')
});

console.log('Test serveur lancee sur le serveur port 3000');
app.listen(3000);
