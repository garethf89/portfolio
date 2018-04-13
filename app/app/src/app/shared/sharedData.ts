import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedData {

  public menuActive:boolean;

  private notify = new Subject<any>();
  /**
   * Observable string streams
   */
  notifyObservable$ = this.notify.asObservable();

  constructor(){
    this.menuActive = false;
  }

  setMenu (data) {
    this.menuActive = data;
  }

  getMenu () {
    return this.menuActive;
  }

  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }

}
