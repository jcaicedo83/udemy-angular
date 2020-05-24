import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
@Pipe({
  name: 'DOMSeguro'
})
export class DOMSeguroPipe implements PipeTransform {

  constructor (private _dom : DomSanitizer){}
  transform(value: string): SafeResourceUrl {
    return this._dom.bypassSecurityTrustResourceUrl(value);
  }

}
