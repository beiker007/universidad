"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cl_mPaqueteTuristico = /** @class */ (function () {
    function Cl_mPaqueteTuristico(_a) {
        var costo = _a.costo, codigo = _a.codigo;
        // OJO el prof los coloco en publicos
        this._costo = 0;
        this._codigo = "";
        this._costo = costo;
        this._codigo = codigo;
    }
    Object.defineProperty(Cl_mPaqueteTuristico.prototype, "costo", {
        get: function () {
            return this._costo;
        },
        set: function (costo) {
            this._costo = costo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cl_mPaqueteTuristico.prototype, "codigo", {
        get: function () {
            return this._codigo;
        },
        set: function (codigo) {
            this._codigo = codigo;
        },
        enumerable: false,
        configurable: true
    });
    Cl_mPaqueteTuristico.prototype.descuento = function () {
        return 0;
    };
    Cl_mPaqueteTuristico.prototype.pagar = function () {
        return 0;
    };
    Cl_mPaqueteTuristico.prototype.toJSON = function () {
        return {
            costo: this.costo,
            codigo: this.codigo,
            descuento: this.descuento(),
            pagar: this.pagar(),
        };
    };
    return Cl_mPaqueteTuristico;
}());
exports.default = Cl_mPaqueteTuristico;
