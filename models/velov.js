var mongoose = require('mongoose');

var velovSchema = new mongoose.Schema({
    type: String,
    properties: [
        {
            number: Number,
            name: String,
            address: String,
            address2: String,
            commune: String
        }
    ]
});
var collectionName = 'velov';
var velov = mongoose.model('velov', velovSchema, collectionName);
module.exports = velov;
