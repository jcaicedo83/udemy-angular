import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string="Capitan America";
  nombre2 :string = "jAvIeR AnDrEs cAiCeDo";
  arreglo =[1,2,3,4,5,6,7,8,9,10];

  PI:number= Math.PI;

  porcentaje : number=0.253;

  moneda:number=2500.35;

  heroe={
    nombre:'Logan',
    clave:'Wolverine',
    edad:500,
    direccion:{
      calle: '1ra',
      casa:20
    }
  }

  valorPromesa = new Promise<string>((resolve, reject)=>{
    setTimeout(() => {
      resolve('llegó la data');
    }, 4500);
  });

  fecha : Date = new Date();
  activar : boolean = true;
  idioma:string = 'en';
  videoUrl :string='https://www.youtube.com/embed/XvDZ7oCwzio';
}
