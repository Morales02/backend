import { Router } from "express";
import { consulProducts,consulProductsByid, deleteProducts, saveProducts, updateProducts } from "../Controllers/products";

const routerProducts = Router();

routerProducts.get('/consulProducts', consulProducts);
routerProducts.get('/consulProductsByid/:id', consulProductsByid);
routerProducts.post('/saveProducts',saveProducts);
routerProducts.put('/updateProducts',updateProducts);
routerProducts.delete('/deleteProducts/:id',deleteProducts);

routerProducts.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not fount'
    })
})

export default routerProducts;