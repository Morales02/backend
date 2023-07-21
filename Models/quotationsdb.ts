import {  DataTypes } from "sequelize";
import db from "../db/connection";

const Quotations = db.define('quotations',{
    quantityproducts:{
        type: DataTypes.STRING
    },
    price_products:{
        type: DataTypes.STRING
    },
    value_Products:{
        type: DataTypes.STRING
    },
    idCustomers:{
        type: DataTypes.BIGINT
    },

    idUsers:{
        type: DataTypes.BIGINT
    },

})

export default Quotations;