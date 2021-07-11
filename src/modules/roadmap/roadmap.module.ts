import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoadmapViewComponent} from './roadmap-view/roadmap-view.component';
import {RoadmapComponent} from './roadmap.component';
import {RoadmapControlComponent} from './roadmap-control/roadmap-control.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [RoadmapViewComponent, RoadmapComponent, RoadmapControlComponent],
})
export class RoadmapModule {
}
