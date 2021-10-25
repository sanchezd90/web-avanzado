const mongoose = require('mongoose');

const purposeSchema = mongoose.Schema({
    en:{
        type: String,
        require: true,
        trim: true
    },
    es:{
        type: String,
        require: true,
        trim: true       
    },
    deleted:{
        type: String,
        require: false,
        trim: true,
        default: '0'
    },
    id:{
        type: String,
        require: false,
        trim: true,
        default: '0'
    }
});

module.exports = mongoose.model('Purpose', purposeSchema);