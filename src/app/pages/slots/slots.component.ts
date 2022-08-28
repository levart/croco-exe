import { Component, OnDestroy, OnInit } from '@angular/core';
import { SlotService } from './services';
import { Subject, takeUntil } from 'rxjs';
import { SlotCategory } from './interfaces/slot-category';
import { Game } from './interfaces/game';
import { SlotProviders } from './interfaces/slot-providers';

@Component({
    selector: 'cr-slots',
    templateUrl: './slots.component.html',
    styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent implements OnInit, OnDestroy {
    categories: SlotCategory[] = [];
    selectedCategory?: SlotCategory | null;

    slotProviders: SlotProviders[] = [];
    selectedSlotProviders?: SlotProviders | null;

    games: Game[] = [];

    sub$: Subject<any> = new Subject<any>();

    providersExpanded = false;

    constructor(private slotService: SlotService) {}

    ngOnInit() {
        this.getCategories();
        this.getProviders();
    }

    getCategories() {
        this.slotService
            .getSlotCategories()
            .pipe(takeUntil(this.sub$))
            .subscribe((res) => {
                this.categories = res;
                this.categories.length && this.categoryChoose(this.categories[0]);
            });
    }

    getProviders() {
        this.slotService
            .getProviders()
            .pipe(takeUntil(this.sub$))
            .subscribe((res) => {
                this.slotProviders = res;
            });
    }

    getSlotByProvider(providerId: string) {
        this.slotService
            .getSlotByProviders(providerId)
            .pipe(takeUntil(this.sub$))
            .subscribe((res) => {
                this.games = res.games;
            });
    }

    categoryChoose(category: SlotCategory) {
        this.selectedSlotProviders = null;
        this.selectedCategory = category;
        this.providersExpanded = false;
        this.games = this.selectedCategory.games;
    }

    providerChoose(provider: SlotProviders) {
        this.selectedSlotProviders = provider;
        this.selectedCategory = null;
        this.getSlotByProvider(this.selectedSlotProviders.provider);
    }

    ngOnDestroy(): void {
        this.sub$.next(null);
        this.sub$.complete();
    }
}
