import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

heroe:any={};

  constructor(private _activatedRoute : ActivatedRoute,
              private _heroeService : HeroesService) { 
    this._activatedRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.heroe = this._heroeService.getHeroe(params['id']);
    });
  }

}
