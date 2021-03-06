import { CargarImagenService } from './../../services/cargar-imagen.service';
import { ProductoService } from './../../services/producto.service';
import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-misproductos',
  templateUrl: './misproductos.component.html',
  styleUrls: ['./misproductos.component.css']
})
export class MisproductosComponent implements OnInit {

  constructor(public auth: AuthService,
              public Ps: ProductoService,
              public cargimg:CargarImagenService) {
                this.Ps.verproducto()
                this.Ps.pg=3;
                console.log( this.Ps.pg)
               }

  ngOnInit(): void {  
  }
  Guardar(){
    this.Ps.crearProducto();
  }
  Editar(){
    this.Ps.editarProducto();
  }

}