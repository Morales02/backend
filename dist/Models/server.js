"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("../db/connection"));
const users_1 = __importDefault(require("../Routers/users"));
const products_1 = __importDefault(require("../Routers/products"));
const clients_1 = __importDefault(require("../Routers/clients"));
const roles_1 = __importDefault(require("../Routers/roles"));
const quotations_1 = __importDefault(require("../Routers/quotations"));
const quotations_products_1 = __importDefault(require("../Routers/quotations_products"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        // RUTAS
        this.apiPaths = {
            users: '/users',
            products: '/products',
            clients: '/clients',
            roles: '/roles',
            quotations: '/Quotations',
            quotations_products: '/quotations_products'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.dbConection();
        this.middleware();
        this.routes();
    }
    dbConection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('database online');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    middleware() {
        // Lectura y parseo Del body 
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        /*  Este es para el dominio
         this.app.use(cors({
             origin: 'http://localhost:5173/'
         })); */
        //* configuracion de carpeta imagenes
        this.app.use('/uploads', express_1.default.static('uploads'));
    }
    routes() {
        this.app.use(this.apiPaths.users, users_1.default);
        this.app.use(this.apiPaths.products, products_1.default);
        this.app.use(this.apiPaths.clients, clients_1.default);
        this.app.use(this.apiPaths.roles, roles_1.default);
        this.app.use(this.apiPaths.quotations, quotations_1.default);
        this.app.use(this.apiPaths.quotations_products, quotations_products_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Se esta ejecutando en el puerto  : ${this.port}`);
        });
    }
}
exports.default = Server;
