 import { Request, Response } from "express";
 import Quotations_products from "../Models/quotations_productsdb";


export const ConsulQuotations_products = async (req: Request, res: Response) => {
    
    const quotations_products = await Quotations_products.findAll();
    res.status(200).json ({
        msg: 'Quotations_products Consultado',
        quotations_products
    })
}

export const ConsulQuotations_productsByid = async (req: Request, res: Response) => {
    const {id} = req.params;
    const quotations_products = await Quotations_products.findByPk(id);
    res.status(200).json ({
        quotations_products
    })
}

export const saveQuotations_products = async (req: Request , res: Response) => {

    const {idQuotations,idProducts,quantityProducts} = req.body;
    const quotations_products = await Quotations_products.create({idQuotations,idProducts,quantityProducts})
   
    res.status(200).json({
        msg: `Su Quotations_products  Guardo Con Exito! `
    })
}

export const updateQuotations_products = async (req: Request , res: Response) => {
    
    const {id,
          idQuotations,
          idProducts,
          quantityProducts}= req.body;
    const update = await Quotations_products.update({idQuotations,
        idProducts,
        quantityProducts},{
        where:{
            id
        }
    });
    
    res.status(200).json ({
        msg: `Quotations_products Actualizada`
    })
}

export const deleteQuotations_products = async (req: Request , res: Response) => {
    
    const { id } = req.params;

    await Quotations_products.destroy({
        where:{
            id
        }
    })

    res.status(200).json({
        msg: `Su Quotations_products  se Elimino correctamente ${id}`
    })
} 