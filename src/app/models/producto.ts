export class Producto {
    idproducto?: string;
    ClienteId: string;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    img:any;
    tipo:string;
    fecha:any;
    estado:boolean;

    constructor(
        ClienteId: string,
        nombre: string,
        descripcion: string,
        precio: number,
        cantidad: number,
        img:any,
        tipo:string,
        fecha:any,
        estado:boolean
    ){
        this.ClienteId= ClienteId;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.precio=precio;
        this.cantidad=cantidad;
        this.img=img;
        this.tipo=tipo;
        this.fecha=fecha;
        this.estado=estado;

    }


}
