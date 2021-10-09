const express = require('express');
const EstudianteController = require('../controllers/estudianteController');

class EstudianteRouter {
    constructor(){
        this.router = express.Router();
        this.config();
    }
    config(){
        // Crear el objeto de Estudiante Controller
        const objEstudianteC = new EstudianteController();
        // Creación de rutas / end points
        this.router.post('/estudiante', objEstudianteC.matricular);
        this.router.get('/estudiante', objEstudianteC.obtenerEstudiantes);
        this.router.put("/estudiante", objEstudianteC.actualizarEstudiante);
        this.router.delete("/estudiante", objEstudianteC.eliminarEstudiante);

    }
}
// Exportar la clase
module.exports = EstudianteRouter; 