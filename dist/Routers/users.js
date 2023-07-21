"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const uuid_1 = require("uuid");
const users_1 = require("../Controllers/users");
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        const randomName = (0, uuid_1.v4)();
        cb(null, `${randomName}.${file.mimetype.split("/")[1]}`);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
const routerUsers = (0, express_1.Router)();
routerUsers.get('/consulUsers', users_1.consulUsers);
routerUsers.get('/consulUser/:id', users_1.consultUserById);
routerUsers.post('/saveUsers', upload.single('file'), users_1.saveUsers);
routerUsers.put('/updateUsers', users_1.updateUsers);
routerUsers.delete('/deleteUsers/:id', users_1.deleteUsers);
routerUsers.get('*', function (req, res) {
    res.status(404).json({
        msg: 'Error 404 page not fount'
    });
});
exports.default = routerUsers;
