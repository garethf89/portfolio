import { NgModule }             from '@angular/core';
import { Router, RouterModule, Routes, NavigationEnd } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';
import { ContactComponent } from './pages/contact/contact.component';

import { WorkItems } from './data/work';
import { Work } from './classes/work';

import 'rxjs/add/operator/filter';

const routes: Routes = [
  { path: '',   component: HomePageComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  entryComponents: [
    WorkPageComponent
  ]
})
export class AppRoutingModule {

  workItems: Work[] = WorkItems;

  constructor(router: Router) {

    const config = router.config;
    
    this.workItems.forEach(function(work){
      var url:string = work.url.toString();
      config.push({path:url, component: WorkPageComponent});
    });

    config.push({ path: '**', pathMatch: 'full', redirectTo: ''});

    router.resetConfig(config);

    router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event:NavigationEnd) => {
      if(event.url === '/' ) return
      if(event.url === '/#my_work'){
        this.animateToElement('my_work');
        return
      }
      
      this.animateToElement('main_content');
    });

  }

  //scroll to element
  animateToElement(el){
    window.setTimeout(function(){ 
      document.getElementById(el).scrollIntoView({ 
        block:'start',
        behavior: 'smooth'
      });
    }, 400);
  }

}
