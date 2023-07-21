"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Quotations = connection_1.default.define('quotations', {
    quantityproducts: {
        type: sequelize_1.DataTypes.STRING
    },
    price_products: {
        type: sequelize_1.DataTypes.STRING
    },
    value_Products: {
        type: sequelize_1.DataTypes.STRING
    },
    idCustomers: {
        type: sequelize_1.DataTypes.BIGINT
    },
    idUsers: {
        type: sequelize_1.DataTypes.BIGINT
    },
});
exports.default = Quotations;
