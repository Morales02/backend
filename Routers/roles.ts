import { Router } from "express";
import {  ConsulRoles, consultRolesById, deleteRoles, saveRoles, updateRoles } from "../Controllers/roles";
const routerRoles = Router();

routerRoles.get ('/consulRoles', ConsulRoles);
routerRoles.get ('/consultRole/:id', consultRolesById);
routerRoles.post('/saveRoles', saveRoles);
routerRoles.put('/updateRoles', updateRoles);
routerRoles.delete('/deleteRoles/:id', deleteRoles );

routerRoles.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not fount'
    })
})

export default routerRoles;