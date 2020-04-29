import {Component} from '@angular/core'

@Component({
    selector:'app-body',
    templateUrl:'./body.component.html'
})
export class BodyComponent{
    mostrar = true;

    frase:any ={
       mensaje :'lorem ipsum dolor sit amet',
       autor   : 'Unknown'
    }

    personajes:string[]=['Spiderman','Venom','Octopus']
}