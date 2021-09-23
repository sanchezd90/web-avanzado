const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:'string',
        require: true,
        trim: true
    },
    email:{
        type:'string',
        require: true,
        trim: true,
        unique:true,
    },
    pass:{
        type:'string',
        require: true,
        trim: true
    },
    ts_create:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', userSchema);