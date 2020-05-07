import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

import {HeroesService} from './servicios/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'heroes', component: HeroesComponent},
      {path: 'heroe/:id', component: HeroeComponent},
      {path: 'busqueda/:valor', component: BusquedaComponent},
      {path: '**',component: HomeComponent}
  ]),
    BrowserModule,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
