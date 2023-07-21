"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quotations_1 = require("../Controllers/quotations");
const routerQuotations = (0, express_1.Router)();
routerQuotations.get('/consulQuotations', quotations_1.ConsulQuotations);
routerQuotations.get('/consulQuotationsByid/:id', quotations_1.ConsulQuotationsByid);
routerQuotations.post('/saveQuotations', quotations_1.saveQuotations);
routerQuotations.put('/updateQuotations', quotations_1.updateQuotations);
routerQuotations.delete('/deleteQuotations/:id', quotations_1.deleteQuotations);
routerQuotations.get('*', function (req, res) {
    res.status(404).json({
        msg: 'Error 404 page not fount'
    });
});
exports.default = routerQuotations;
