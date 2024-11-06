const mongoose = require('mongoose');

const GnocchiSchema = new mongoose.Schema({

        name: {
            type: mongoose.SchemaTypes.String,
        }

})

module.exports = mongoose.model('Gnocchi', GnocchiSchema);