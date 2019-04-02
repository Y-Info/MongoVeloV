var mongoose = require('mongoose');

var velovSchema = new mongoose.Schema({
    type: String,
    properties: [
        {
            number: Number,
            name: String,
            address: String,
            address2: String,
            commune: String,
            nmarrond: Number,
            bonus: String,
            pole: String,
            lat: String,
            ing: String,
            bike_stands: Number,
            status: String,
            available_bike_stands: Number,
            available_bikes: Number,
            availabilitycode: Number,
            availability: String,
            banking: Number,
            grid: Number,
            last_update: String,
            last_update_fme: String,
            code_insee: String,
            langue: String,
            etat: String,
            nature: String,
            titre: String,
            description: String,
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
var collectionName = 'velov';
var velov = mongoose.model('velov', velovSchema, collectionName);
module.exports = velov;
