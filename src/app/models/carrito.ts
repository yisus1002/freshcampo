export class Carrito {
    id?: string;
    idCliente:string;
    idProducto: string;
    cantidad:number;

    constructor(
        idCliente:string,
        idProducto: string,
        cantidad:number,
    ){
        this.idCliente=idCliente;
        this.idProducto=idProducto;
        this.cantidad=cantidad;
    }
}
