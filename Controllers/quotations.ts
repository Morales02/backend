import { Request, Response } from "express";
import Quotations from "../Models/quotationsdb";

export const ConsulQuotations = async (req: Request, res: Response) => {
   
   const quotations = await Quotations.findAll();

    res.status(200).json ({
        msg: 'Quotations Consultado',
        quotations
    })
}

export const ConsulQuotationsByid = async (req: Request, res: Response) => {
   const { id } = req.params;
   const quotations = await Quotations.findByPk(id); 

    res.status(200).json ({
        msg: `Su consulta quotation con el numero id: ${id} ` ,
        quotations
    })
}

export const saveQuotations = async(req: Request , res: Response) => {
    
    const {id,quantityproducts,price_products,value_Products,idCustomers,idUsers} = req.body;
    const quotations = await Quotations.create({id,quantityproducts,price_products,value_Products,idCustomers,idUsers});
    res.status(200).json({
        msg: `Su  Quotations Guardo Con Exito!  `
    })
}

export const updateQuotations = async(req: Request , res: Response) => {

    const {id,
        quantityproducts,
        price_products,
        value_Products,
        idCustomers,
        idUsers}= req.body;
    const update = await Quotations.update({
        quantityproducts,
        price_products,
        value_Products,
        idCustomers,
        idUsers},{
            where:{
                id
            }
        });
    res.status(200).json ({
        msg: `Quotations Actualizada`
    })
}

export const deleteQuotations = async (req: Request , res: Response) => {

    const {id} = req.params;

    await Quotations.destroy({
        where:{
            id
        }
    })
    res.status(200).json({
        msg: `Su Quotations  se Elimino correctamente`
    })
}