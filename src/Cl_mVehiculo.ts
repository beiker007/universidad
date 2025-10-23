import Cl_mPrestamo from "./Cl_mPrestamo.js";   
export default class Cl_mVehiculo extends Cl_mPrestamo{ 
private _modelo: string = "";   

  constructor({cedula,edoCivil, modelo = ""} :{cedula: number, edoCivil: string, modelo: string }    ) {
    super({cedula, edoCivil});
    this.modelo = modelo;
  }

  set modelo(modelo: string) {
    this._modelo = modelo;
  }

  get modelo(): string {
    return this._modelo;
  }

  montoBase() {
    if (this.modelo == "n" || this.modelo == "N") {
      return 5000;
    } else if (this.modelo === "u" || this.modelo === "U") {
      return 3000;
    } else if (this.modelo === "v" || this.modelo === "V" ) {
      return 1000;
    } else {
      return 0; 
}
  }
intereses(): number{
return this.montoBase() * 0.20;  
}

montoFinal(): number {
    if(this.edoCivil == "c" || this.edoCivil == "C"){
        return this.montoBase()* 1.10; 
    }
    else return this.montoBase();


}
  toJSON() {
    return {
      ...super.toJSON(),
      modelo: this.modelo, 
    };
  }
}