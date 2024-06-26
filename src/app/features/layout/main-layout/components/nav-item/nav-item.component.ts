import { Component, Input } from '@angular/core';
import { NavItem } from '../../nav-items';

@Component({
    selector: 'cr-nav-item',
    templateUrl: './nav-item.component.html',
    styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
    @Input() item?: NavItem | null;
}
