const Globals = {
    webP: false,
    res: false
}

Globals.webP = WebpIsSupported();
Globals.res = getRes();


function WebpIsSupported(){
    return navigator.userAgent.indexOf('Chrome') > -1;
}

function getRes(){
    if(window.matchMedia){

        var retinaQuery = "(-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi)";

        if (window.matchMedia(retinaQuery).matches){
            return '2x';
        } 
    }
    return '';
}

export default Globals;

