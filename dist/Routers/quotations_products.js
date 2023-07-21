"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quotations_products_1 = require("../Controllers/quotations_products");
const routerQuotations_products = (0, express_1.Router)();
routerQuotations_products.get('/ConsulQuotations_products', quotations_products_1.ConsulQuotations_products);
routerQuotations_products.get('/ConsulQuotations_productsByid/:id', quotations_products_1.ConsulQuotations_productsByid);
routerQuotations_products.post('/saveQuotations_products', quotations_products_1.saveQuotations_products);
routerQuotations_products.put('/updateQuotations_products', quotations_products_1.updateQuotations_products);
routerQuotations_products.delete('/deleteQuotations_products/:id', quotations_products_1.deleteQuotations_products);
routerQuotations_products.get('*', function (req, res) {
    res.status(404).json({
        msg: 'Error 404 page not fount'
    });
});
exports.default = routerQuotations_products;
