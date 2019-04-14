var mongoose = require('mongoose');

var influSchema = new mongoose.Schema({
    type: String,
    properties: [
        {
            nom: String,
            typedeplacement: String
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
var collectionName = 'influence';
var influ = mongoose.model('influence', influSchema, collectionName);
module.exports = influ;
