const mongoose = require('mongoose');
let doctorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    dob: {
        type: Date,
    },
    address: {
        state: {
            type: String,
            validate: {
                validator: function (stateLength) {
                    return state.length >= 2 && state.length <= 3;
                },
                message: 'State should be between 2 and 3 characters'
            }
        },
        suburb: String,
        street: String,
        unit: Number
    },
    numPatients: {
        type: Number,
        validate: {
            validator: function (numPatientsValue) {
                return numPatientsValue >= 0;
            },
            message: 'Number of patients should be greater than 0'
        }
    }
});
module.exports = mongoose.model('Doctor', doctorSchema);


