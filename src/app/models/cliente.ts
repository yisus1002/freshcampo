export class Cliente {
    id?: string;
    nombre: string;
    apellido: string;
    avatar: string;
    correo: string;
    rol: number;

    constructor(
        nombre: string,
        apellido: string,
        avatar: string,
        correo: string,
        rol: number,  
    ){

        this.nombre=nombre;
        this.apellido=apellido;
        this.avatar=avatar;
        this.correo=correo;
        this.rol=rol;
    }
}
