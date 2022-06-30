export class Cliente {
    id?: string;
    nombre: string;
    apellido: string;
    avatar: string;
    correo: string;
    idg: string;
    rol: number;

    constructor(
        // id:string,
        nombre: string,
        apellido: string,
        avatar: string,
        correo: string,
        idg:string,
        rol: number,  
    ){
        // this.id = id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.avatar=avatar;
        this.correo=correo;
        this.idg=idg;
        this.rol=rol;
    }
}
