"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveUsers = exports.consulUsers = void 0;
const consulUsers = (req, res) => {
    res.status(200).json({
        msg: 'Usuario Consultado'
    });
};
exports.consulUsers = consulUsers;
const saveUsers = (req, res) => {
    res.status(200).json({
        msg: 'Usuario Guardado'
    });
};
exports.saveUsers = saveUsers;
