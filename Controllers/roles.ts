import { Request, Response } from "express";
import Roles from "../Models/rolesdb";

//consultar todos 
 export const ConsulRoles =  async(req: Request, res: Response) => {
    const roles = await  Roles.findAll();
    res.status(200).json ({
        msg: `El Rol Consultado es ` ,
        roles
    })
} 

// consultaremos por id
 export  const consultRolesById = async (req: Request, res: Response) => {
    const { id }  = req.params;
    const roles = await Roles.findByPk(id);
    res.status(200).json ({
        roles
    })
 }

export const saveRoles = async (req: Request , res: Response) => {
    
    const {name , description} = req.body;
    const roles = await Roles.create({name,description});
    res.status(200).json({
        msg: `Su ${name} es y el Rol asignado es ${description} a sido Guardado ${roles.dataValues.id}`
    })
}

export const updateRoles =  async (req: Request , res: Response) => {
   
    const {id,name , description} = req.body;
    const update = await Roles.update({name,description},{
        where:{
            id
        }
    });
    
    res.status(200).json ({
        msg: `el usuario con el ${id} y Su ${name} ha Sido  Actualizado ${description}`
    })  
}

export const deleteRoles = async(req: Request , res: Response) => {

    const { id } = req.params;

     await Roles.destroy({
        where:{
            id
        }
    });
    res.status(200).json({
        msg: `Su Rol con el id: ${id} a Sido Delete`
    })
}