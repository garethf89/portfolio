import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';
import { FooterComponent } from './global/footer/footer.component';
import { MenuComponent } from './global/menu/menu.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';
import { HeaderComponent } from './global/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { SharedData } from './shared/sharedData'

import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppRoutingModule }     from './app-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LastfmComponent } from './components/lastfm/lastfm.component';
import { SocketComponent } from './socket/socket.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule, InlineSVGModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, FooterComponent, MenuComponent, HeaderComponent, WorkPageComponent, HomePageComponent, ContactComponent, LastfmComponent, SocketComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
  SharedData
  ]
})
export class AppModule { }
