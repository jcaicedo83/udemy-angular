import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, hide : boolean = false): string {
    let pwd:string='';
    let x:number=0;

    // if (hide){
    //   for(x = 0 ; x< value.length; x ++)
    //     pwd += '*';
    // } else{
    //   pwd = value;
    // }
    // return pwd;

    return (hide) ? '*'.repeat(value.length): value;
  }

}
