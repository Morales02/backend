import { Request , Response} from 'express';
import Users from '../Models/userdb';
import Role from '../Models/rolesdb';



export const consulUsers =  async ( req: Request  ,  res: Response ) => {
    /* llamamos el archivo de la carpeta model para la Db y con el findall Llamamos toda mi tabla de users*/
    const users = await Users.findAll({
        attributes: ['id','photo', 'name', 'email', 'idRol'],
        include:[{
            model: Role
        }],
        where:{
            state: 1
        }
    });
    res.status(200).json ({
        msg:  `Usuario Consultados`,
        users
    })
}
// consulta por id
export  const consultUserById = async (req: Request, res: Response) => {
    const { id }  = req.params;
    const users = await Users.findByPk(id);

    res.status(200).json ({
       users
    })
 }

export const saveUsers   = async (req: Request , res: Response) => {
 /* const { name,email,password, photo, age,} = req.body;
    const users = await Users.create({
        name,
        email,
        password,
        photo,
        age,
        idRol           
    }) */
    const { body } = req;
    body.photo= req.file?.filename;
    body.idRol     = 1;
    const users = await Users.create(body);

    res.status(200).json ({
         msg:` Se ha Registrado Nuevo usuario con el ID: ${body.idRol} `

    })
}

/* export const updateUsers = async (req: Request , res: Response) => {

    const { id,name,email,password, photo, age,state,idRol} = req.body;

    const users = await Users.update({ name,email,password,photo,age,state,idRol},{
        where:{
            id
        }
    });

    res.status( 200 ).json ({
        msg: ` Usuario Actualizado con numero de id: ${id} `
    })
} */
export const updateUsers = async(req: Request, res: Response) => {
    // const _id = req.params.id;
    // const { id, names, email, age } = req.body;

    const { body } = req;
    body.photo = req.file?.filename;
    body.idRol = 1;

    const users = await Users.update(body, {
        where: {
            id: body.id
        }
    });

    res.status(200).json({
        msg: `El Usuario con el ID: ${body.id} ha sido actualizado`
    })
}

export const deleteUsers = async ( req: Request , res: Response) => {

    const {id} =  req.params;

    await Users.destroy({
        where:{
            id
        }
    })
    res.status(200).json ({
        msg: `el Usuario a sido eliminado con el id: ${id} `
    })
}