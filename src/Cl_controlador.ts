import Cl_mAgenciaViajes from "./Cl_mAgenciaViajes.js";
import Cl_mInternacional from "./Cl_mInternacional.js";
import Cl_mNacional from "./Cl_mNacional.js";
import Cl_mPaqueteTuristico from "./Cl_mPaquetesTuristico.js";
import Cl_vAgenciaViajes from "./Cl_vAgenciaViajes.js";
import {iInternacional} from "./Cl_vInternacional.js"
import { iNacional } from "./Cl_vNacional.js";

export default class Cl_controlador{
    public modelo: Cl_mAgenciaViajes;
    public vista: Cl_vAgenciaViajes;

    constructor(modelo: Cl_mAgenciaViajes, vista: Cl_vAgenciaViajes){
      this.modelo = modelo;
      this.vista = vista; 
    }
    procesarPaqueteNacional(data: iNacional){
      let mNacional = new Cl_mNacional({
        costo: data.costo,
        codigo: data.codigo,
        destino: data.destino,
      });
      this.modelo.procesarPaquetesTuristicos(mNacional);
      this.reportarPaqueteTuristico({mPaqueteTuristico: mNacional})
    }
    
    procesarPaqueteInternacional(data: iInternacional){
      let mInternacional = new Cl_mInternacional({
        costo: data.costo,
        codigo: data.codigo,
      });
      this.modelo.procesarPaquetesTuristicos(mInternacional)
      this.reportarPaqueteTuristico({mPaqueteTuristico:mInternacional})
    }

    reportarPaqueteTuristico({mPaqueteTuristico}:{mPaqueteTuristico:Cl_mPaqueteTuristico}){
      this.vista.reportarPaqueteTuristico({
        dataPaqueteTuristico: mPaqueteTuristico.toJSON(),
        totalVendido: this.modelo.totalVendido(),
        porcPaquetesInternacionales: this.modelo.porcPaquetesInternacionales(),
        cantPaquetesInternacionales: this.modelo.cantPaquetesInternacionales(),
      })
      this.vista.show();
    }
}