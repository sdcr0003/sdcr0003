const mongoose = require('mongoose');
let patientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: {
        type: String,
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    age: {
        type: Number,
        validate: {
            validator: function (ageValue) {
                return ageValue >= 0 && ageValue <= 120;
            },
            message: 'Age should be a number between 0 and 120'
        }
    },
    visit: {
        type: Date,
        default: Date.now
    },
    description:{
        type: String,
        trim: true,
        required: true,
        minlength: 10,
        message: 'Description must be a string with 10 or more characters'
  },
});
module.exports = mongoose.model('Patient', patientSchema);
