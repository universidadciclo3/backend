const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materiaSchema = new Schema({
    codigo:{
        type: String
    },
    nombre: {
        type: String
    }
},{
    collection: 'materias'
});

module.exports = mongoose.model('Materia', materiaSchema);