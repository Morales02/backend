"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_1 = require("../Controllers/clients");
const routerClients = (0, express_1.Router)();
routerClients.get('/ConsulClients', clients_1.ConsulClients);
routerClients.get('/ConsulClientsByid/:id', clients_1.ConsulClientsById);
routerClients.post('/saveClients', clients_1.saveClients);
routerClients.put('/updateClients', clients_1.updateClients);
routerClients.delete('/deleteClients/:id', clients_1.deleteClients);
routerClients.get('*', function (req, res) {
    res.status(404).json({
        msg: 'Error 404 page not fount'
    });
});
exports.default = routerClients;
