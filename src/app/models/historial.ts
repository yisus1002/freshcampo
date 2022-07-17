export class Historial {
    id?: string;
    idCliente:string;
    idProducto:string;
    nombre:string;
    descripcion: string;
    precio:number;
    cantidad: number;
    img: any;
    tipo:string;
    fecha: any;
    estado: boolean;
    fecha_compra: any;

    constructor(
        idCliente:string,
        idProducto:string,
        nombre:string,
        descripcion: string,
        precio:number,
        cantidad: number,
        img: any,
        tipo:string,
        fecha: any,
        estado: boolean,
        fecha_compra: any,
        ){
            this.idCliente=idCliente;
            this.idProducto=idProducto;
            this.nombre=nombre;
            this.descripcion=descripcion;
            this.precio=precio;
            this.cantidad=cantidad;
            this.img=img;
            this.tipo=tipo;
            this.fecha=fecha;
            this.estado =estado ;
            this.fecha_compra=fecha_compra;
    }
}
