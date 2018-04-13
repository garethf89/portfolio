import { Component } from '@angular/core';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  { 
  
  name = 'Gareth Ferguson'; 

  constructor(private _router: Router, private route: ActivatedRoute ) {}

  ngOnInit() {

    
  }

}
