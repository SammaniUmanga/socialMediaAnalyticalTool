import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  
  constructor(private senitizer: DomSanitizer) {}

  transform(url: any){
    return this.senitizer.bypassSecurityTrustResourceUrl(url);
  }

}


//  transform(url: any, args?: any): any {