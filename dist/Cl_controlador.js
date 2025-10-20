"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cl_mInternacional_1 = require("./Cl_mInternacional");
var Cl_mNacional_1 = require("./Cl_mNacional");
var Cl_controlador = /** @class */ (function () {
    function Cl_controlador(_a) {
        var modelo = _a.modelo, vista = _a.vista;
        this.modelo = modelo;
        this.vista = vista;
    }
    Cl_controlador.prototype.procesarPaqueteNacional = function (data) {
        var mNacional = new Cl_mNacional_1.default({
            costo: data.costo,
            codigo: data.codigo,
            destino: data.destino,
        });
        this.modelo.procesarPaquetesTuristicos(mNacional);
        this.vista.reportarPaqueteTuristico({ mPaqueteTuristico: mNacional });
    };
    Cl_controlador.prototype.procesarPaqueteInternacional = function (data) {
        var mInternacional = new Cl_mInternacional_1.default({
            costo: data.costo,
            codigo: data.codigo,
        });
        this.modelo.procesarPaquetesTuristicos(mInternacional);
        this.vista.reportarPaqueteTuristico({ mPaqueteTuristico: mInternacional });
    };
    Cl_controlador.prototype.reportarPaqueteTuristico = function (_a) {
        var mPaqueteTuristico = _a.mPaqueteTuristico;
        this.vista.reportarPaqueteTuristico({
            dataPaqueteTuristico: mPaqueteTuristico.toJSON(),
            totalVendido: this.modelo.totalVendido(),
            porcPaqueteInternacionales: this.modelo.porcPaquetesInternacionales(),
            cantPaquetesInternacionales: this.modelo.cantPaquetesInternacionales(),
        });
        this.vista.show();
    };
    return Cl_controlador;
}());
exports.default = Cl_controlador;
