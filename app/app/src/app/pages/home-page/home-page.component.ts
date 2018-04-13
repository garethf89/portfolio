import { Component, OnInit } from '@angular/core';

import { Skills } from '../../data/skills';
import { Skill } from '../../classes/skill';

import { WorkItems } from '../../data/work';
import { Work } from '../../classes/work';

import { Globals } from '../../globals';

import {fadeAnimation} from '../../_animations/fade_animation';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'home-page',
  providers: [Globals],
  animations: [fadeAnimation],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  skills: Skill[] = Skills;
  workItems: Work[] = WorkItems;
  webp:Boolean;
  imageExt:String = "";

  constructor(private globals: Globals) {
    this.webp = globals.webP;

    if(this.globals.res === "2x"){
      this.imageExt = "2x";
    }
  }

}
