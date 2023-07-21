import { Router } from "express";
import { ConsulClients,ConsulClientsById, deleteClients, saveClients, updateClients } from "../Controllers/clients";

const routerClients = Router();

routerClients.get ('/ConsulClients',ConsulClients);
routerClients.get ('/ConsulClientsByid/:id',ConsulClientsById);
routerClients.post('/saveClients',saveClients);
routerClients.put('/updateClients',updateClients);
routerClients.delete('/deleteClients/:id',deleteClients);

routerClients.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not fount'
    })
})

export default routerClients;