import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail = function (formData) {

    let headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    let url = `${environment.api}/formEmail`;

    return this.http.post(url, formData, {headers: headers})
          .map(data => data);
    }
}
