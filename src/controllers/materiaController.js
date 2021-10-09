const materia = require('../models/materia');

class MateriaController {

    constructor() {

    }

    matricular(req, res) {
        materia.create(req.body, (error, data) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(201).json(data);
            }
        });
    }

    getMateria(req, res) {
        materia.find((error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }

    setMateria(req, res) {
        //Obtener los parámetros de la solicitud
        let { id, codigo, nombre } = req.body;
        //Construimos el objeto que actualizará
        let obj = {
            codigo,
            nombre
        }
        materia.findByIdAndUpdate(id, {
            $set: obj
        }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        })
    }

    deleteMateria(req, res) {
        let { id } = req.body;
        materia.findByIdAndRemove(id, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        })
    }

}

module.exports = MateriaController;
