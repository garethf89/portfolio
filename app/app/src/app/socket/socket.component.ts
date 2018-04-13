import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit {

  private socket;
  public count:String;
  public counterStatus:Boolean = false;

  constructor() { 

    const connectionString = environment.api;

    this.socket = io.connect(connectionString);
  }

  ngOnInit() {

      this.socket.on('connect', () => {

        this.socket.send('here');

        var res;

        this.socket.on('count', (msg) => {

          if (msg.count > 1) {
            res = '<strong>' + msg.count + '</strong> current viewers';
          } else {
            res = '<strong>' + msg.count + '</strong> current viewer';
          }

          this.count = res;

          if (!this.counterStatus) {
            this.counterStatus = true;
          }

        });
    });
  }
}
