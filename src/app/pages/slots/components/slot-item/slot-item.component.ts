import { Component, Input } from '@angular/core';
import { Game } from '../../interfaces/game';

@Component({
    selector: 'cr-slot-item',
    templateUrl: './slot-item.component.html',
    styleUrls: ['./slot-item.component.scss'],
})
export class SlotItemComponent {
    @Input() item!: Game;
}
