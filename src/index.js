const express = require("express");
const DbConnection = require("./database/dbConnection");
const EstudianteRouter = require("./routers/estudianteRouter");
const MateriaRouter = require("./routers/materiaRouter");
//Importar cors
const cors = require('cors');

class Server {

    constructor() {
        //Crear objeto de conexión a la BD
        const bdConnection = new DbConnection();
        //Construimos una aplicación express para montar el servidor
        this.app = express();
        //Indicar el puerto por el que va a correr el servidor
        this.app.set("port", process.env.PORT || 3000);
        //Procesar datos en formato json
        this.app.use(express.json());
        //indicar conexiones de origen cruzado
        this.app.use(cors());
        //Crear la ruta raíz
        const router = express.Router();
        router.get('/', (req, res) => {
            res.status(200).json({ message: "Corriendo servidor" });
        });
        /**************CREAR RUTAS DIFERENTES A LA RAÍZ***************/
        const estudianteRouter = new EstudianteRouter();
        const materiaRouter = new MateriaRouter();
        /****************AÑADIR RUTAS************/
        this.app.use(router);
        this.app.use(estudianteRouter.router);
        this.app.use(materiaRouter.router);

        /**********LEVANTAR EL SERVIDOR**********/
        this.app.listen(this.app.get('port'), () => {
            console.log("Corriendo por el puerto => ", this.app.get('port'));
        });
    }

}

new Server();
