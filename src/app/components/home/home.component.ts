import { Cliente } from './../../models/cliente';
import { FreshcampoService } from './../../services/freshcampo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Cliente: Cliente[]=[];

  constructor(
    private freshcampoService: FreshcampoService,

  ) { }

  ngOnInit(): void {
    this.cargarCliente();
  }
  cargarCliente(){
    this.freshcampoService.getCliente().subscribe(
      data =>{
        console.log(data);
        this.Cliente=data;
      }
    )
  }

}
