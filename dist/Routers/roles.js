"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roles_1 = require("../Controllers/roles");
const routerRoles = (0, express_1.Router)();
routerRoles.get('/consulRoles', roles_1.ConsulRoles);
routerRoles.get('/consultRole/:id', roles_1.consultRolesById);
routerRoles.post('/saveRoles', roles_1.saveRoles);
routerRoles.put('/updateRoles', roles_1.updateRoles);
routerRoles.delete('/deleteRoles/:id', roles_1.deleteRoles);
routerRoles.get('*', function (req, res) {
    res.status(404).json({
        msg: 'Error 404 page not fount'
    });
});
exports.default = routerRoles;
