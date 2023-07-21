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
exports.deleteRoles = exports.updateRoles = exports.saveRoles = exports.consultRolesById = exports.ConsulRoles = void 0;
const rolesdb_1 = __importDefault(require("../Models/rolesdb"));
//consultar todos 
const ConsulRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roles = yield rolesdb_1.default.findAll();
    res.status(200).json({
        msg: `El Rol Consultado es `,
        roles
    });
});
exports.ConsulRoles = ConsulRoles;
// consultaremos por id
const consultRolesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const roles = yield rolesdb_1.default.findByPk(id);
    res.status(200).json({
        roles
    });
});
exports.consultRolesById = consultRolesById;
const saveRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    const roles = yield rolesdb_1.default.create({ name, description });
    res.status(200).json({
        msg: `Su ${name} es y el Rol asignado es ${description} a sido Guardado ${roles.dataValues.id}`
    });
});
exports.saveRoles = saveRoles;
const updateRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, description } = req.body;
    const update = yield rolesdb_1.default.update({ name, description }, {
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `el usuario con el ${id} y Su ${name} ha Sido  Actualizado ${description}`
    });
});
exports.updateRoles = updateRoles;
const deleteRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield rolesdb_1.default.destroy({
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `Su Rol con el id: ${id} a Sido Delete`
    });
});
exports.deleteRoles = deleteRoles;
