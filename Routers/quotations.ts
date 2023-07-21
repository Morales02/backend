import { Router } from "express";
import {ConsulQuotations,ConsulQuotationsByid, deleteQuotations, saveQuotations, updateQuotations,} from "../Controllers/quotations"

const routerQuotations = Router();

routerQuotations.get ('/consulQuotations', ConsulQuotations);
routerQuotations.get ('/consulQuotationsByid/:id', ConsulQuotationsByid);
routerQuotations.post('/saveQuotations',saveQuotations);
routerQuotations.put('/updateQuotations', updateQuotations);
routerQuotations.delete('/deleteQuotations/:id', deleteQuotations);

routerQuotations.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not fount'
    })
})

export default routerQuotations;