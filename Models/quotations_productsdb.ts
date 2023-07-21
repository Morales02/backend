 import {  DataTypes } from "sequelize";
 import db from "../db/connection";

const Quotations_products = db.define('quotations_products',{
    idQuotations:{
        type: DataTypes.BIGINT
    },

    idProducts:{
        type: DataTypes.BIGINT
    },

    quantityProducts:{
        type: DataTypes.STRING
    }
})

export default Quotations_products;     