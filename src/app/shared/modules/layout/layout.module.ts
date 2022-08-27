import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavItemComponent } from './main-layout/components/nav-item/nav-item.component';
import {RouterLinkActive, RouterLinkWithHref, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    MainLayoutComponent,
    NavItemComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLinkActive,
    RouterOutlet
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
