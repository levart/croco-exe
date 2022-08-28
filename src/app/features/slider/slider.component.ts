import { Component, Input } from '@angular/core';

@Component({
    selector: 'cr-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
    @Input() image?: string;
}
