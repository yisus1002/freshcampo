import { ProductoService } from './../../services/producto.service';
import { Router } from '@angular/router';
import { Cliente } from './../../models/cliente';
import { FreshcampoService } from './../../services/freshcampo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filtro:string = 'Todos'
  Cliente: Cliente[]=[];
  mostrar:boolean= false;
  constructor(
    private freshcampoService: FreshcampoService,
    public router: Router,
    public PS: ProductoService ,
  ) {
    this.PS.listarproductos()
    this.PS.pg=1;
    console.log(PS.pg)
   }

  ngOnInit(): void {
  }

  filtrar(val:any){
    this.PS.filtro =''
    this.PS.filtro = val
    this.PS.listarproductos();
  }

}
