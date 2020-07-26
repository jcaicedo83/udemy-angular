import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent  {

@Input() items:any[]=[];

  constructor(private router : Router) { }

  seeMore=(item : any)=>{
    let artistId;

    if (item.type ==='artist'){
      artistId= item.id;
    }else{
      artistId= item.artists[0].id;
    }

    this.router.navigate(['/artist', artistId]);
  }

}
