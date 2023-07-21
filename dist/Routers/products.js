"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../Controllers/products");
const routerProducts = (0, express_1.Router)();
routerProducts.get('/consulProducts', products_1.consulProducts);
routerProducts.get('/consulProductsByid/:id', products_1.consulProductsByid);
routerProducts.post('/saveProducts', products_1.saveProducts);
routerProducts.put('/updateProducts', products_1.updateProducts);
routerProducts.delete('/deleteProducts/:id', products_1.deleteProducts);
routerProducts.get('*', function (req, res) {
    res.status(404).json({
        msg: 'Error 404 page not fount'
    });
});
exports.default = routerProducts;
