"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*  PARA LA BASE DE DATOS */
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define('users', {
    id: {
        type: sequelize_1.DataTypes.STRING
    },
    names: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    age: {
        type: sequelize_1.DataTypes.STRING
    },
    photo: {
        type: sequelize_1.DataTypes.STRING
    },
    idRol: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = User;
/* id-
   email-
   password-
   name-
   age-
   photo-
   idrol-
   state-
*/ 
