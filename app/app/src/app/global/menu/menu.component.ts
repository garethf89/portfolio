import { Component, OnInit } from '@angular/core';

import { SharedData } from '../../shared/sharedData'

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

    isActive:Boolean = false;

    constructor(private sharedData: SharedData) { }

    ngOnInit() {

      this.isActive = this.sharedData.getMenu();

    }

    toggleActive(){
      this.sharedData.notifyOther({option: 'onSubmit', value: 'From header'});
    }

}
