const estudiante = require('../models/estudiante');

class EstudianteController{

    constructor(){
        //console.log(this.generarCodigo("nombre", "apellido", "cedula"));
    }
    matricular(req, res){
        //Capturar datos del cuerpo de la petición
        //let { nombre, apellido, cedula } = req.body;
        //Generar código del estudiante
        //let codigo = this.generarCodigo(nombre, apellido, cedula);
        //res.status(201).json({codigo});

        
        estudiante.create(req.body, (error,data)=>{
            if(error){
                res.status(400).json({error})
            }else{
                res.status(201).json(data);
            }
        })
        
    }
    obtenerEstudiantes(req, res) {
        estudiante.find((error, data) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(200).json(data);
            }
        });
    }
    actualizarEstudiante(req, res) {
        let { id, nombre, apellido, email, cedula, genero, edad, codigo } = req.body;
        let obj = {
            nombre, apellido, email, cedula, genero, edad, codigo
        }
        estudiante.findByIdAndUpdate(id, {
            $set: obj
        }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }

    eliminarEstudiante(req, res){
        let { id } = req.body;

        estudiante.findByIdAndRemove(id, (error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        });
    }



    generarCodigo(nombre, apellido, cedula) {
        /*
        let inicial_nombre = nombre.charAt(0);
        let inicial_apellido = apellido.charAt(0);
        //let digitos_cedula = cedula.slice(-4);
        let codigo = inicial_nombre + inicial_apellido;// + digitos_cedula;
        return codigo;
        */
        return "ejemplo";
    }

}
module.exports = EstudianteController;