import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rol'
})
export class RolPipe implements PipeTransform {

  transform(value: number): string {
   let rol = '';
   if(value===1){
    rol= 'Admin'
    return rol
   } else if(value===0){
    rol= 'User'
    return rol;
   }
    return rol;
  }

}
