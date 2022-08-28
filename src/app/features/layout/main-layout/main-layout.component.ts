import { Component } from '@angular/core';
import { NavItem, navItems } from './nav-items';

@Component({
    selector: 'cr-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
    navItems: NavItem[] = navItems;
}
