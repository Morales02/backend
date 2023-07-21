/*  PARA LA BASE DE DATOS */
import { DataTypes } from "sequelize";
import db from "../db/connection";
import Roles from "./rolesdb";

const Users = db.define('users',{
    name:{
        type: DataTypes.STRING
    },

    email:{
        type: DataTypes.STRING
    },

    password:{
        type: DataTypes.STRING
    },

    age:{
        type: DataTypes.INTEGER
    },

    photo:{
        type: DataTypes.STRING
    },
    
    state:{
        type: DataTypes.INTEGER
    },
    idRol:{
        type: DataTypes.BIGINT
    }
})
//Para la Relacion entre tablas de la base de datos
Users.belongsTo(Roles,{
    foreignKey: 'idRol'
})

export default Users;
/* id-
   email-
   password-
   name-
   age-
   photo-
   idrol-
   state- 
*/