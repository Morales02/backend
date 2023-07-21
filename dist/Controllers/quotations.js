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
exports.deleteQuotations = exports.updateQuotations = exports.saveQuotations = exports.ConsulQuotationsByid = exports.ConsulQuotations = void 0;
const quotationsdb_1 = __importDefault(require("../Models/quotationsdb"));
const ConsulQuotations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quotations = yield quotationsdb_1.default.findAll();
    res.status(200).json({
        msg: 'Quotations Consultado',
        quotations
    });
});
exports.ConsulQuotations = ConsulQuotations;
const ConsulQuotationsByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const quotations = yield quotationsdb_1.default.findByPk(id);
    res.status(200).json({
        msg: `Su consulta quotation con el numero id: ${id} `,
        quotations
    });
});
exports.ConsulQuotationsByid = ConsulQuotationsByid;
const saveQuotations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, quantityproducts, price_products, value_Products, idCustomers, idUsers } = req.body;
    const quotations = yield quotationsdb_1.default.create({ id, quantityproducts, price_products, value_Products, idCustomers, idUsers });
    res.status(200).json({
        msg: `Su  Quotations Guardo Con Exito!  `
    });
});
exports.saveQuotations = saveQuotations;
const updateQuotations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, quantityproducts, price_products, value_Products, idCustomers, idUsers } = req.body;
    const update = yield quotationsdb_1.default.update({
        quantityproducts,
        price_products,
        value_Products,
        idCustomers,
        idUsers
    }, {
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `Quotations Actualizada`
    });
});
exports.updateQuotations = updateQuotations;
const deleteQuotations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield quotationsdb_1.default.destroy({
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `Su Quotations  se Elimino correctamente`
    });
});
exports.deleteQuotations = deleteQuotations;
