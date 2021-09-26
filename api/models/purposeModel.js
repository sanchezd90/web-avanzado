const mongoose = require('mongoose');

const purposeSchema = mongoose.Schema({
    en:{
        type:'string',
        require: true,
        trim: true
    },
    es:{
        type:'string',
        require: true,
        trim: true       
    },
    deleted:{
        type:'string',
        require: false,
        trim: true,
        default: '0'
    },
    id:{
        type:'string',
        require: false,
        trim: true,
        default: '0'
    }
});

module.exports = mongoose.model('Purpose', purposeSchema);