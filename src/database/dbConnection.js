const mongoose = require('mongoose')
const database = require('./urlDatabase')

class DbConnection{

    constructor(){
        //Conectar a la BD enviandole como parámetro la url de conexión
        mongoose.connect(database.db).then(()=>{
            console.log("Conexión exitosa a BD");
        }).catch(error=>{
            console.error(error);
        })
    }

}

module.exports = DbConnection;
