import {  DataTypes } from "sequelize";
import db from "../db/connection";

const Clients = db.define('customers',{
    nameClients:{
        type: DataTypes.STRING
    },

    lastnameCustomers:{
        type: DataTypes.STRING
    },

    telCustomers:{
        type: DataTypes.STRING
    },
    address:{
        type:DataTypes.STRING
    }
})

export default Clients;