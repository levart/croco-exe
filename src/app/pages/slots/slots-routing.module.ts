import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LiveComponent} from "../live/live.component";
import {SlotsComponent} from "./slots.component";

const routes: Routes = [
  {
    path: '',
    component: SlotsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlotsRoutingModule { }
