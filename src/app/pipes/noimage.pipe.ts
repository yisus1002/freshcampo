import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imagen: any): string {
    if(!imagen){
      return 'assets/img/noimage.png'
    }
    if(imagen.length >0){
      return imagen
      // return 'assets/img/noimage.png'
    }else{
      return 'assets/img/noimage.png';
    }
  }

}
