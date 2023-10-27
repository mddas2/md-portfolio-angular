import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component:  HomeComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
