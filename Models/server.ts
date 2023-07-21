import express, { Application } from "express";
import db from '../db/connection' 
import routerUsers from "../Routers/users";
import routerProducts from "../Routers/products";
import routerClients from "../Routers/clients";
import routerRoles from "../Routers/roles";
import routerQuotations from "../Routers/quotations";
import routerQuotations_products from "../Routers/quotations_products"; 
import cors from 'cors';
class Server {

    private app: Application;
    private port: string | undefined;
        // RUTAS
    private apiPaths = {
        users: '/users',
        products: '/products',
        clients: '/clients',
        roles: '/roles',
        quotations: '/Quotations',
        quotations_products: '/quotations_products'
    }

    constructor() {
        this.app = express ();
        this.port = process.env.PORT;
        this.dbConection(); 
        this.middleware();
        this.routes();
    }
    
    async dbConection() {
        try {
    
            await db.authenticate();
            console.log('database online');
        } catch (error) {
            console.log(error);
        }
    } 

    middleware ()  {
        // Lectura y parseo Del body 
        this.app.use(express.json());
        this.app.use(cors());
        //* configuracion de carpeta imagenes
        this.app.use('/uploads',express.static('uploads'))
    } 

    routes() {
        this.app.use(this.apiPaths.users, routerUsers);
        this.app.use(this.apiPaths.products, routerProducts);
        this.app.use(this.apiPaths.clients, routerClients);
        this.app.use(this.apiPaths.roles, routerRoles);
        this.app.use(this.apiPaths.quotations, routerQuotations);
        this.app.use(this.apiPaths.quotations_products, routerQuotations_products); 

    } 

    listen() {
        this.app.listen(this.port, () =>{
            console.log(`Se esta ejecutando en el puerto  : ${this.port}`);
        })
    }
}

export default Server;