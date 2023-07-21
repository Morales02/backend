"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Clients = connection_1.default.define('customers', {
    nameClients: {
        type: sequelize_1.DataTypes.STRING
    },
    lastnameCustomers: {
        type: sequelize_1.DataTypes.STRING
    },
    telCustomers: {
        type: sequelize_1.DataTypes.STRING
    },
    address: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Clients;
