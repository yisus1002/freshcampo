import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; 
import { MapaService } from 'src/app/services/mapa.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  long:any;
  lati:any;
  mapa?: mapboxgl.Map;
  constructor(public ubu:MapaService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.asignarubi()
  }
  crearMArcador(lng:number, lat:number, mapa:any){
    const marker = new mapboxgl.Marker({
     draggable:true,
    })
    .setLngLat([lng,lat])
    .addTo(mapa )
    marker.on('drag',()=>{
      console.log(marker.getLngLat());
    })
    }

    asignarubi(){
      this.ubu.getUserlocation().then(()=>{
       this.long= this.ubu.userlocatio?.[0]
       this.lati= this.ubu.userlocatio?.[1]
       this.Cmapa(this.long,this.lati)
      //  this.crearMArcador(this.long,this.lati, mapa)
      })
    }
    Cmapa(lon:any, lat:any){
         
    (mapboxgl as typeof mapboxgl).accessToken = environment.maxpboxkey;
    this.mapa = new mapboxgl.Map({
      container: 'mapa-mapbox', // container ID
      style: 'mapbox://styles/mapbox/dark-v10', // style URL
      center:[lon,lat], // Long, Lat @8.7524158,-75.8764232
      zoom: 14 // starting zoom
      });
       this.crearMArcador(this.long,this.lati, this.mapa)
    }


}
