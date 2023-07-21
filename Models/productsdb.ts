import {DataTypes } from "sequelize"
import db from "../db/connection"

const Products = db.define('products',{
    nameProducts:{
        type: DataTypes.STRING
    },
    priceProducts:{
        type: DataTypes.STRING
    },
    quantityProducts:{
        type: DataTypes.STRING
    },
    photo:{
        type: DataTypes.STRING
    }
})


export default Products;