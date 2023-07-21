"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('final', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = db;
/* LUEGO DEHACER LA CONECCION A LA DB INSTALAMOS   npm i @types/express@4.16.1
    tsc --init para el archivo tsconfig.json  dist     */ 
