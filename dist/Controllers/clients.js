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
exports.deleteClients = exports.updateClients = exports.saveClients = exports.ConsulClientsById = exports.ConsulClients = void 0;
const clientsdb_1 = __importDefault(require("../Models/clientsdb"));
const ConsulClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clients = yield clientsdb_1.default.findAll();
    res.status(200).json({
        msg: 'Cliente Consultado',
        clients
    });
});
exports.ConsulClients = ConsulClients;
const ConsulClientsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const clients = yield clientsdb_1.default.findByPk(id);
    res.status(200).json({
        clients
    });
});
exports.ConsulClientsById = ConsulClientsById;
const saveClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nameClients, lastnameCustomers, telCustomers, address } = req.body;
    const clients = yield clientsdb_1.default.create({ nameClients, lastnameCustomers, telCustomers, address });
    res.status(200).json({
        msg: `clients Save`
    });
});
exports.saveClients = saveClients;
const updateClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, nameClients, lastnameCustomers, telCustomers, address } = req.body;
    yield clientsdb_1.default.update({ nameClients, lastnameCustomers, telCustomers, address }, {
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `Clients Actualizado`
    });
});
exports.updateClients = updateClients;
const deleteClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield clientsdb_1.default.destroy({
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `Clients Delete`
    });
});
exports.deleteClients = deleteClients;
