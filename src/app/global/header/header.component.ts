import { Component, OnInit } from '@angular/core';
import { SharedData } from '../../shared/sharedData'

import * as Slideout from 'slideout';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  private subscription: Subscription;

  isActive:boolean = false;
  slider:any;
  icon:any;

  constructor(private sharedData: SharedData) { }

  ngOnInit() {

    this.isActive = this.sharedData.getMenu();
    this.icon = document.getElementById('nav__pullDown');

    //Create a subscription - fire this function when the sharedData function is called from another component
    this.subscription = this.sharedData.notifyObservable$.subscribe((res) => {
      this.toggleActive();
   });

    this.slider = new Slideout({
       'panel': document.getElementById('content'),
       'menu': document.getElementById('menu'),
       'padding': 200,
       'tolerance': 70,
       'fx': 'ease-in-out',
       'duration' : 400
     });

    var headerDiv = document.querySelector("#header"),
         element = document.getElementById("mainnav");

     window.addEventListener('scroll', function() {
       if (window.pageYOffset >= (headerDiv.clientHeight - 10)) {
         if (!element.classList.contains('revealHeader')) {
           element.classList.add('revealHeader');
         }
       } else {
         element.classList.remove('revealHeader');
       }
     }, {passive: true});
  }


  //Toggle the menu in or out
  toggleActive(){

    if(this.isActive){
      this.isActive = false;
      this.sharedData.setMenu(false);
    }else{
      this.isActive = true
      this.sharedData.setMenu(true);
    }

    this.slider.toggle();

    this.icon.classList.toggle('active');

  }

}
