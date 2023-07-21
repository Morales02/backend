 import { Router } from "express";
import {ConsulQuotations_products,
        deleteQuotations_products, 
        saveQuotations_products,
        updateQuotations_products,
        ConsulQuotations_productsByid
    } from "../Controllers/quotations_products"


const routerQuotations_products = Router();

routerQuotations_products.get ('/ConsulQuotations_products', ConsulQuotations_products);
routerQuotations_products.get ('/ConsulQuotations_productsByid/:id', ConsulQuotations_productsByid);
routerQuotations_products.post('/saveQuotations_products',saveQuotations_products);
routerQuotations_products.put('/updateQuotations_products', updateQuotations_products);
routerQuotations_products.delete('/deleteQuotations_products/:id', deleteQuotations_products);

routerQuotations_products.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not fount'
    })
})

export default routerQuotations_products; 
