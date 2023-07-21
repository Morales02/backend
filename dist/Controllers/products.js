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
exports.deleteProducts = exports.updateProducts = exports.saveProducts = exports.consulProductsByid = exports.consulProducts = void 0;
const productsdb_1 = __importDefault(require("../Models/productsdb"));
const consulProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productsdb_1.default.findAll({
        attributes: ['id', 'nameProducts', 'priceProducts', 'quantityProducts']
    });
    res.status(200).json({
        msg: `Products Consultados`,
        products
    });
});
exports.consulProducts = consulProducts;
const consulProductsByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const products = yield productsdb_1.default.findByPk(id);
    res.status(200).json({
        msg: `Su Products Fue Consultado con el id: ${id}`,
        products
    });
});
exports.consulProductsByid = consulProductsByid;
const saveProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /*  const{nameProducts, priceProducts,quantityProducts,jpg} = req.body;
     const products = await Products.create({nameProducts, priceProducts,quantityProducts,jpg}); */
    const { body } = req;
    const products = yield productsdb_1.default.create(body);
    res.status(200).json({
        msg: `Su Products Fue Guardado `,
    });
});
exports.saveProducts = saveProducts;
const updateProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, nameProducts, priceProducts, quantityProducts, jpg } = req.body;
    const products = yield productsdb_1.default.update({ nameProducts, priceProducts, quantityProducts, jpg }, {
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `Products Actualizado`
    });
});
exports.updateProducts = updateProducts;
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield productsdb_1.default.destroy({
        where: {
            id
        }
    });
    res.status(200).json({
        msg: ` El Products a Sido Eliminado con el id: ${id} `
    });
});
exports.deleteProducts = deleteProducts;
