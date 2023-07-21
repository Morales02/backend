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
exports.deleteUsers = exports.updateUser = exports.saveUsers = exports.consultUserById = exports.consulUsers = void 0;
const userdb_1 = __importDefault(require("../Models/userdb"));
const rolesdb_1 = __importDefault(require("../Models/rolesdb"));
const consulUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* llamamos el archivo de la carpeta model para la Db y con el findall Llamamos toda mi tabla de users*/
    const users = yield userdb_1.default.findAll({
        attributes: ['id', 'photo', 'name', 'email', 'idRol'],
        include: [{
                model: rolesdb_1.default
            }],
        where: {
            state: 1
        }
    });
    res.status(200).json({
        msg: `Usuario Consultados`,
        users
    });
});
exports.consulUsers = consulUsers;
// consulta por id
const consultUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const users = yield userdb_1.default.findByPk(id);
    res.status(200).json({
        users
    });
});
exports.consultUserById = consultUserById;
const saveUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    /* const { name,email,password, photo, age,} = req.body;
       const users = await Users.create({
           name,
           email,
           password,
           photo,
           age,
           idRol
       }) */
    const { body } = req;
    body.photo = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    body.idRol = 1;
    const users = yield userdb_1.default.create(body);
    res.status(200).json({
        msg: ` Se ha Registrado Nuevo usuario con el ID: ${body.idRol} `
    });
});
exports.saveUsers = saveUsers;
/* export const updateUsers = async (req: Request , res: Response) => {

    const { id,name,email,password, photo, age,state,idRol} = req.body;

    const users = await Users.update({ name,email,password,photo,age,state,idRol},{
        where:{
            id
        }
    });

    res.status( 200 ).json ({
        msg: ` Usuario Actualizado con numero de id: ${id} `
    })
} */
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const _id = req.params.id;
    // const { id, names, email, age } = req.body;
    const { body } = req;
    body.idRol = 1;
    const users = yield userdb_1.default.update(body, {
        where: {
            id: body.id
        }
    });
    res.status(200).json({
        msg: `El Usuario con el ID: ${body.id} ha sido actualizado`
    });
});
exports.updateUser = updateUser;
const deleteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield userdb_1.default.destroy({
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `el Usuario a sido eliminado con el id: ${id} `
    });
});
exports.deleteUsers = deleteUsers;
