const mongoose = require('mongoose');

const domainSchema = mongoose.Schema({
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

module.exports = mongoose.model('Domain', domainSchema);