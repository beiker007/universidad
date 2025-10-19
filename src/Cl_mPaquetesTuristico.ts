export default class Cl_mPaqueteTuristico{
    // OJO el prof los coloco en publicos
    protected _costo: number =0
    protected _codigo: string=""
    public _tipo: number = 1

    constructor({costo, codigo, tipo}: {costo:number, codigo:string, tipo: number}){
        this._costo = costo;
        this._codigo = codigo;
        this._tipo = tipo;
    }

    set costo(costo:number){
        this._costo = costo;
    }
    get costo():number{
        return this._costo;
    }
    set codigo(codigo:string){
        this._codigo = codigo;
    }
    get codigo():string{
        return this._codigo;
    }

    descuento(): number{
      return 0  
    }

    pagar():number{
        return 0
    }

    toJSON(){
        return {
            costo: this.costo,
            codigo: this.codigo,
            descuento: this.descuento(),
            pagar: this.pagar(),
        };
    }
}