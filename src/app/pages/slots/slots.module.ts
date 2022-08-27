import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SlotsRoutingModule} from './slots-routing.module';
import {SlotsComponent} from './slots.component';
import {SliderModule} from "../../features";


@NgModule({
  declarations: [
    SlotsComponent
  ],
  imports: [
    CommonModule,
    SlotsRoutingModule,
    SliderModule
  ]
})
export class SlotsModule {
}
