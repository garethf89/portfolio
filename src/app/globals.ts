// globals.ts
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

WebpIsSupported(){
    return navigator.userAgent.indexOf('Chrome') > -1;
}
getRes(){
    if(window.matchMedia){

        var retinaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
                     (min-resolution: 144dpi)";

        if (window.matchMedia(retinaQuery).matches){
            return '2x';
        } 
    }
    return '1x';
}

  public webP:Boolean = this.WebpIsSupported();
  public res:String = this.getRes();

}