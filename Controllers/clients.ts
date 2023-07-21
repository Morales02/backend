import { Request, Response } from "express";
import Clients from "../Models/clientsdb";

export const ConsulClients = async(req: Request, res: Response) => {
    
    const clients = await Clients.findAll();
    res.status(200).json ({
        msg: 'Cliente Consultado',
        clients
    })
}

export  const ConsulClientsById = async (req: Request, res: Response) => {
    const { id }  = req.params;
    const clients = await Clients.findByPk(id);
    res.status(200).json ({
        clients
    })
 }

export const saveClients = async(req: Request , res: Response) => {

    const {nameClients , lastnameCustomers,telCustomers,address} = req.body;
    const clients = await Clients.create({nameClients , lastnameCustomers,telCustomers,address});
    res.status(200).json({
        msg: `clients Save`
    })
}

export const updateClients = async (req: Request , res: Response) => {
    const {id,nameClients , lastnameCustomers,telCustomers,address} = req.body;
    await Clients.update({nameClients , lastnameCustomers,telCustomers,address},{
        where:{
            id
        }
    })
    res.status(200).json ({
        msg: `Clients Actualizado`
    })
}

export const deleteClients = async (req: Request , res: Response) => {
   const { id } = req.params;

    await Clients.destroy({
        where:{
            id
        }
    })
    res.status(200).json({
        msg: `Clients Delete`
    })
}