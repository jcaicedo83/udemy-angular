import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeCo from '@angular/common/locales/es-CO';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeCo);
registerLocaleData(localeFr);

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DOMSeguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DOMSeguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'es-CO'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
