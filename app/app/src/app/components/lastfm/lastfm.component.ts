import { Component, OnInit } from '@angular/core';

import { LastfmService } from '../../services/lastfm.service';

@Component({
  selector: 'app-lastfm',
  providers: [LastfmService],
  templateUrl: './lastfm.component.html',
  styleUrls: ['./lastfm.component.scss']
})
export class LastfmComponent implements OnInit {

  albums = null;

  constructor(private lastfmService : LastfmService) { }

  ngOnInit() {
      this.lastfmService.getAlbums().subscribe(
        data => {
          if(data.topalbums){
            this.albums = data.topalbums["album"].filter(element => element.artist.name != "Five Finger Death Punch");
          }
        }, 
        error => {
          console.log(error)
      });

  }

}
