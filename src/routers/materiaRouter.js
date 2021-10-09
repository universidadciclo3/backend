const express = require('express');
const MateriaController = require('../controllers/materiaController');

class MateriaRouter {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        const objMateriaC = new MateriaController();
        this.router.post("/materia", objMateriaC.matricular);
        this.router.get("/materia", objMateriaC.getMateria);
        this.router.put("/materia", objMateriaC.setMateria);
        this.router.delete("/materia", objMateriaC.deleteMateria);
    }

}

module.exports = MateriaRouter;
