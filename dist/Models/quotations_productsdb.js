"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Quotations_products = connection_1.default.define('quotations_products', {
    idQuotations: {
        type: sequelize_1.DataTypes.BIGINT
    },
    idProducts: {
        type: sequelize_1.DataTypes.BIGINT
    },
    quantityProducts: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Quotations_products;
