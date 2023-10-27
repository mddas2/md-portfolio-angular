import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { LeftbarComponent } from './core/leftbar/leftbar.component';
import { RightbarComponent } from './core/rightbar/rightbar.component';
import { ProfileComponent } from './core/profile/profile.component';
import { UppertitleComponent } from './core/uppertitle/uppertitle.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { SharedDefaultComponent } from './modules/shared-default/shared-default.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftbarComponent,
    RightbarComponent,
    ProfileComponent,
    UppertitleComponent,
    AboutComponent,
    HomeComponent,
    SharedDefaultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
