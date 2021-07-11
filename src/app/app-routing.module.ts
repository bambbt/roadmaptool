import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {RoadmapComponent} from '../modules/roadmap/roadmap.component';
import {HomeComponent} from './components/home/home.component';
import {RoadmapModule} from '../modules/roadmap/roadmap.module';

const routes = [
  {path: 'roadmap', component: RoadmapComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), CommonModule, RoadmapModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppRoutingModule {
}
