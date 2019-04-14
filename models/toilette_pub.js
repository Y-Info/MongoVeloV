var mongoose = require('mongoose');

var toiletteSchema = new mongoose.Schema({
    type: String,
    properties: [
        {
            commune: String,
            voie: String,
            numerodansvoie: String,
            gestionnaire: String,
            observation: String,
            identifiant: String,
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
var collectionName = 'toilettes_pub';
var toilette = mongoose.model('toilettes_pub', toiletteSchema, collectionName);
module.exports = toilette;
