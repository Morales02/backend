"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*  PARA LA BASE DE DATOS */
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const rolesdb_1 = __importDefault(require("./rolesdb"));
const Users = connection_1.default.define('users', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER
    },
    photo: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.INTEGER
    },
    idRol: {
        type: sequelize_1.DataTypes.BIGINT
    }
});
//Para la Relacion entre tablas de la base de datos
Users.belongsTo(rolesdb_1.default, {
    foreignKey: 'idRol'
});
exports.default = Users;
/* id-
   email-
   password-
   name-
   age-
   photo-
   idrol-
   state-
*/ 
