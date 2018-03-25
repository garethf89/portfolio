import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { WorkItems } from '../../data/work';
import { Work } from '../../classes/work';

import { Skills } from '../../data/skills';
import { Skill } from '../../classes/skill';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import {fadeAnimation} from '../../_animations/fade_animation';

import * as baguetteBox from 'baguettebox.js';

@Component({
  selector: 'app-work-page',
  animations: [fadeAnimation],
  templateUrl: './work-page.component.html'
})
export class WorkPageComponent {

  href:String;
  workItems: Work[] = WorkItems;
  work:Work;
  query:any;
  hero$: Observable<Work>;
  bg:String;
  skillsData: Skill[] = Skills;
  workSkills:Skill[];
  getSkillSVG:Function;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.href = this.router.url;
    this.href = this.href.replace('/','');

    this.workItems.forEach( work => {

      if(work.url === this.href){

        this.work = work;
        this.bg = `linear-gradient(50deg, rgba(255,255,255,1) 50%,rgba(255,255,255,0.7) 100%),url(${work.bg})`;

      }
    });

    //Set up the gallery
    setTimeout(function() {
      baguetteBox.run('.photo-gallery', {
        captions : false,
        fullscreen: true,
        preload: 0
      });
    }, 0);

  }
  
}
