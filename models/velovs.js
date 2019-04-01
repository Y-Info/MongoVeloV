var mongoose = require('mongoose');

var velov = new mongoose.Schema({
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
            available_bike: Number,
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
    geometry: [
        {
            type: String,
            coordinate: [
                {
                    0: String,
                    1: String
                }
            ]
        }
    ]
});

module.export = velov;
