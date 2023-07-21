"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClients = exports.updateBills = exports.saveBills = exports.ConsulBills = void 0;
const ConsulBills = (req, res) => {
    res.status(200).json({
        msg: 'Factura Consultado'
    });
};
exports.ConsulBills = ConsulBills;
const saveBills = (req, res) => {
    res.status(200).json({
        msg: `Su Factura Guardo Con Exito! `
    });
};
exports.saveBills = saveBills;
const updateBills = (req, res) => {
    res.status(200).json({
        msg: `Factura  Actualizada`
    });
};
exports.updateBills = updateBills;
const deleteClients = (req, res) => {
    res.status(200).json({
        msg: `Su Factura  se Elimino correctamente`
    });
};
exports.deleteClients = deleteClients;
