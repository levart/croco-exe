import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./shared/modules/layout/main-layout/main-layout.component";
import {SportRoutingModule} from "./features/sport/sport-routing.module";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/main/main.module').then(m => m.MainModule)
      },
      {
        path: 'sport',
        loadChildren: () => import('./features/sport/sport.module').then(m => m.SportModule)
      },
      {
        path: 'live',
        loadChildren: () => import('./features/live/live.module').then(m => m.LiveModule)
      },
      {
        path: 'slots',
        loadChildren: () => import('./features/slots/slots.module').then(m => m.SlotsModule)
      },
      {
        path: 'casino',
        loadChildren: () => import('./features/casino/casino.module').then(m => m.CasinoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
