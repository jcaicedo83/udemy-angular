import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

 @Input() heroe :Heroe;
 @Input() index :number;
 @Output() HeroeSelected:EventEmitter<number>;

  constructor(private _router : Router) {
    this.HeroeSelected= new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(){ 
   this.HeroeSelected.emit(this.index);
  }
}
