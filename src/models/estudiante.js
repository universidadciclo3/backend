const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estudianteSchema = new Schema({
    nombre:{
        type: String
    },
    apellido:{
        type: String
    },
    email:{
        type: String
    },
    cedula:{
        type: String
    },
    genero:{
        type: String
    },
    edad:{
        type: Number
    },
    codigo:{
        type: String
    },

},{
    collection: 'estudiantes'
});

module.exports = mongoose.model('Estudiante', estudianteSchema);