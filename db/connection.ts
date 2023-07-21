import { Sequelize } from "sequelize";

const db = new Sequelize('final', 'root','', {
    host: 'localhost',
    dialect: 'mysql' 
})

export default db;

/* LUEGO DEHACER LA CONECCION A LA DB INSTALAMOS   npm i @types/express@4.16.1 
    tsc --init para el archivo tsconfig.json  dist     */