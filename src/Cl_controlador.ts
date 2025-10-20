import Cl_mAgenciaViajes from "./Cl_mAgenciaViajes.js";
import Cl_mInternacional from "./Cl_mInternacional";
import Cl_mNacional from "./Cl_mNacional";
import Cl_mPaqueteTuristico from "./Cl_mPaquetesTuristico";
import Cl_vPaquetesTuristicos from "./Cl_vPaquetesTuristicos";
import Cl_vNacional from "./Cl_vNacional";
import Cl_vAgenciaViajes from "./Cl_vAgenciaViajes.js";
import {iInternacional} from "./Cl_vInternacional.js"
import { iNacional } from "./Cl_vNacional";

export default class Cl_controlador{
    public modelo: Cl_mAgenciaViajes;
    public vista: Cl_vAgenciaViajes;

    constructor({modelo,vista}:{modelo:Cl_mAgenciaViajes, vista:Cl_vAgenciaViajes}){
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
      this.vista.reportarPaqueteTuristico({mPaqueteTuristico: mNacional})
    }
}