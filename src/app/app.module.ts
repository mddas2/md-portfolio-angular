import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { LeftbarComponent } from './core/leftbar/leftbar.component';
import { RightbarComponent } from './core/rightbar/rightbar.component';
import { ProfileComponent } from './core/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftbarComponent,
    RightbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
