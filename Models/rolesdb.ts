import {  DataTypes } from "sequelize";
import db from "../db/connection";


const  Roles = db.define('roles',{
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    }
})

export default Roles;