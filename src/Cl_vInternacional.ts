import Cl_vPaquetesTuristicos from "./Cl_vPaquetesTuristicos";

interface iInternacional{
    costo: number;
    codigo: string;
    descuento: number;
    pagar: number;
}

export default class Cl_vInternacional extends Cl_vPaquetesTuristicos{

}

export {iInternacional};