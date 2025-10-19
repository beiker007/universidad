"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Cl_mPaquetesTuristico_js_1 = require("./Cl_mPaquetesTuristico.js");
var Cl_mInternacional = /** @class */ (function (_super) {
    __extends(Cl_mInternacional, _super);
    // MOSCA lo hice sin ver algun ejemplo
    function Cl_mInternacional(_a) {
        var costo = _a.costo, codigo = _a.codigo, tipo = _a.tipo;
        return _super.call(this, { costo: costo, codigo: codigo, tipo: tipo }) || this;
    }
    Cl_mInternacional.prototype.descuento = function () {
        return this.costo * 0.15;
    };
    Cl_mInternacional.prototype.pagar = function () {
        return this.costo + this.descuento();
    };
    return Cl_mInternacional;
}(Cl_mPaquetesTuristico_js_1.default));
exports.default = Cl_mInternacional;
