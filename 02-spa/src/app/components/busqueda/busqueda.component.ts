import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes:Heroe[]=[];
  valorBusqueda :string;

  constructor(private _activatedRoute : ActivatedRoute,
              private _heroeService : HeroesService) { 
    
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params =>{
      this.valorBusqueda= params['valor'];
      console.log(this.valorBusqueda);
      this.heroes = this._heroeService.BuscarHeroes(params['valor']);
    });
  }

}
