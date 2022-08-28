import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './features/layout/main-layout/main-layout.component';
import { SportRoutingModule } from './pages/sport/sport-routing.module';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule),
            },
            {
                path: 'sport',
                loadChildren: () => import('./pages/sport/sport.module').then((m) => m.SportModule),
            },
            {
                path: 'live',
                loadChildren: () => import('./pages/live/live.module').then((m) => m.LiveModule),
            },
            {
                path: 'slots',
                loadChildren: () => import('./pages/slots/slots.module').then((m) => m.SlotsModule),
            },
            {
                path: 'casino',
                loadChildren: () => import('./pages/casino/casino.module').then((m) => m.CasinoModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
