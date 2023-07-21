"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuotations_products = exports.updateQuotations_products = exports.saveQuotations_products = exports.ConsulQuotations_productsByid = exports.ConsulQuotations_products = void 0;
const quotations_productsdb_1 = __importDefault(require("../Models/quotations_productsdb"));
const ConsulQuotations_products = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quotations_products = yield quotations_productsdb_1.default.findAll();
    res.status(200).json({
        msg: 'Quotations_products Consultado',
        quotations_products
    });
});
exports.ConsulQuotations_products = ConsulQuotations_products;
const ConsulQuotations_productsByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const quotations_products = yield quotations_productsdb_1.default.findByPk(id);
    res.status(200).json({
        quotations_products
    });
});
exports.ConsulQuotations_productsByid = ConsulQuotations_productsByid;
const saveQuotations_products = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idQuotations, idProducts, quantityProducts } = req.body;
    const quotations_products = yield quotations_productsdb_1.default.create({ idQuotations, idProducts, quantityProducts });
    res.status(200).json({
        msg: `Su Quotations_products  Guardo Con Exito! `
    });
});
exports.saveQuotations_products = saveQuotations_products;
const updateQuotations_products = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, idQuotations, idProducts, quantityProducts } = req.body;
    const update = yield quotations_productsdb_1.default.update({ idQuotations,
        idProducts,
        quantityProducts }, {
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `Quotations_products Actualizada`
    });
});
exports.updateQuotations_products = updateQuotations_products;
const deleteQuotations_products = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield quotations_productsdb_1.default.destroy({
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `Su Quotations_products  se Elimino correctamente ${id}`
    });
});
exports.deleteQuotations_products = deleteQuotations_products;
