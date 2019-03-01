

export class Multa{
    private _id: number;
    private _matricula: string;
    private _concepto: string; 
    private _importe: number; 
    private _fecha_alta: string;
    private _fecha_baja: string;
    private _fecha_modificacion: string;
    

    constructor(id:number, matricula:string, concepto:string, importe:number, 
        fecha_alta:string, fecha_baja: string, fecha_modificacion: string){

            this._id = id;
            this._matricula = matricula;
            this._concepto = concepto;
            this._importe = importe;
            this._fecha_alta = fecha_alta;
            this._fecha_baja = fecha_baja;
            this._fecha_modificacion = fecha_modificacion;

    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get matricula(): string {
        return this._matricula;
    }
    public set matricula(value: string) {
        this._matricula = value;
    }

    public get concepto(): string {
        return this._concepto;
    }
    public set concepto(value: string) {
        this._concepto = value;
    }

    public get importe(): number {
        return this._importe;
    }
    public set importe(value: number) {
        this._importe = value;
    }

    public get fecha_alta(): string {
        return this._fecha_alta;
    }
    public set fecha_alta(value: string) {
        this._fecha_alta = value;
    }

    public get fecha_baja(): string {
        return this._fecha_baja;
    }
    public set fecha_baja(value: string) {
        this._fecha_baja = value;
    }

    public get fecha_modificacion(): string {
        return this._fecha_modificacion;
    }
    public set fecha_modificacion(value: string) {
        this._fecha_modificacion = value;
    }



}