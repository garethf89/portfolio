import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

interface lfmObj {
  topalbums: Object
}

@Injectable()
export class LastfmService {

  constructor(private http: HttpClient) { }

  getAlbums(){

    let headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    let data = {'name':'DirtyG'};
    let url = `${environment.api}/lastFm`;

    return this.http.post(url, data, {headers: headers})
          .map(data => data as lfmObj);

  }

}
