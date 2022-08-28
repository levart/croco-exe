import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlotsRoutingModule } from './slots-routing.module';
import { SlotsComponent } from './slots.component';
import { SliderModule } from '../../features';
import { SlotService } from './services';
import { SlotFilterItemComponent } from './components/slot-filter-item/slot-filter-item.component';

@NgModule({
    declarations: [SlotsComponent, SlotFilterItemComponent],
    imports: [CommonModule, SlotsRoutingModule, SliderModule],
    providers: [SlotService],
})
export class SlotsModule {}
