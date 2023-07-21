import { Request, Response } from "express";
import Products from "../Models/productsdb";

export const consulProducts = async( req: Request, res: Response) => {

    const products =  await Products.findAll({
        attributes: ['id','nameProducts', 'priceProducts','quantityProducts']
    });
    res.status(200).json ({
        msg: `Products Consultados`,
        products
    })
}

export const consulProductsByid = async ( req: Request , res: Response) => {
    const {id} = req.params;
    const products = await Products.findByPk(id)
    res.status(200).json ({
        msg: `Su Products Fue Consultado con el id: ${id}`,
        products
    })
}

export const saveProducts = async ( req: Request , res: Response) => {
    
   /*  const{nameProducts, priceProducts,quantityProducts,jpg} = req.body;
    const products = await Products.create({nameProducts, priceProducts,quantityProducts,jpg}); */

    const { body } = req;
    const products = await Products.create(body);

    res.status(200).json ({
        msg: `Su Products Fue Guardado `,
       
    })
}

export const updateProducts = async ( req: Request , res: Response) => {

    const{id,nameProducts, priceProducts,quantityProducts,jpg} = req.body;
    const products = await Products.update({nameProducts, priceProducts,quantityProducts,jpg},{
        where:{
            id
        }
    });
    res.status(200).json ({
        msg: `Products Actualizado`
    })
}

export const deleteProducts = async (req: Request , res: Response) => {

    const { id } = req.params;

    await Products.destroy({
        where:{
            id
        }
    })
        res.status(200).json({
        msg: ` El Products a Sido Eliminado con el id: ${id} `
    })
}