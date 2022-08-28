import { Component, Input } from '@angular/core';

@Component({
    selector: 'cr-slot-filter-item',
    template: ` <div class="category-item" [ngClass]="{ active: active }">
        <ng-container *ngIf="icon">
            <img class="icon" [src]="icon" [alt]="name" />
        </ng-container>
        <div class="title">
            <ng-container *ngIf="count">
                <div class="count">{{ count }}</div>
            </ng-container>
            {{ name }}
        </div>
    </div>`,
    styleUrls: ['./slot-filter-item.component.scss'],
})
export class SlotFilterItemComponent {
    @Input() active: boolean = false;
    @Input() name!: string;
    @Input() icon?: string;
    @Input() count?: number;
}
