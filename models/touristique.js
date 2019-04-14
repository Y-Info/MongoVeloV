var mongoose = require('mongoose');

var touristiqueSchema = new mongoose.Schema({
    type: String,
    properties: [
        {
            id: String,
            id_sitra1: String,
            type_detail: String,
            nom: String,
            adresse: String,
            codepostal: String,
            commune: String,
            telephone: String,
            siteweb: String,
            ouverture: String,
            email: String,
            facebook: String,
            tarifsenclair: String,
        }
    ],
    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

var collectionName = 'touristique';
var touristique = mongoose.model('touristique', touristiqueSchema, collectionName);
module.exports = touristique;
