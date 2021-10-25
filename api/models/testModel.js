const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    nombre_principal:{
        type: String,
        require: true,
        trim: true
    },
    dominio_principal:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Domain'      
    },
    ref_publicacion:{
        type: String,
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