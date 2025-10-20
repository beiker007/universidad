"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cl_mAgenciaViajes = /** @class */ (function () {
    function Cl_mAgenciaViajes() {
        this._acumPrecioViajes = 0;
        this._contPaquetes = 0;
        this._contPaquetesInternacionales = 0;
    }
    Cl_mAgenciaViajes.prototype.procesarPaquetesTuristicos = function (paquete) {
        this._contPaquetes++;
        this._acumPrecioViajes += paquete.pagar();
        this._contPaquetesInternacionales++;
    };
    Cl_mAgenciaViajes.prototype.totalVendido = function () {
        return this._acumPrecioViajes;
    };
    Cl_mAgenciaViajes.prototype.porcPaquetesInternacionales = function () {
        return (this._contPaquetes / this._contPaquetesInternacionales);
    };
    Cl_mAgenciaViajes.prototype.cantPaquetesInternacionales = function () {
        return this._contPaquetesInternacionales;
    };
    return Cl_mAgenciaViajes;
}());
exports.default = Cl_mAgenciaViajes;
