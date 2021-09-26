const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    nombre_principal:{
        type:'string',
        require: true,
        trim: true
    },
    dominio_principal:{
        type:'objectId',
        require: true,
        trim: true       
    },
    ref_publicacion:{
        type:'objectId',
        require: true,
        trim: true,
        default: null       
    },
    ts_update:{
        type: Date,
        default: Date.now()
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

module.exports = mongoose.model('Test', testSchema);