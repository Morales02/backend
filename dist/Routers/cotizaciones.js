"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_1 = require("../Controllers/clients");
const routerClients = (0, express_1.Router)();
routerClients.get('/ConsulClients', clients_1.ConsulClients);
routerClients.put('/saveClients', clients_1.saveClients);
routerClients.post('/updateClients', clients_1.updateClients);
routerClients.delete('/deleteClients', clients_1.deleteClients);
exports.default = routerClients;
