import { Injectable } from '@angular/core';
import { filter, flatMap, map, Observable, pluck, tap } from 'rxjs';
import { BaseService } from '../../../core';
import { ApiResponse } from '../../../core/interfaces';
import { SlotCategory } from '../interfaces/slot-category';
import { SlotProviders } from '../interfaces/slot-providers';
import { Slot } from '../interfaces/slot';

@Injectable()
export class SlotService {
    constructor(private baseService: BaseService) {}

    getSlotCategories(params = {}): Observable<SlotCategory[]> {
        return this.baseService
            .get<ApiResponse<SlotCategory[]>>('/v2/slot/categories', { include: 'games', ...params })
            .pipe(
                map((response: ApiResponse<SlotCategory[]>) => response.data),
                map((res: SlotCategory[]) => {
                    return res.filter(
                        (f: SlotCategory) => f.platform !== 'mobile' && !f.group && f.group !== '' && f.totalGames > 1
                    );
                })
            );
    }

    getProviders(params = {}): Observable<SlotProviders[]> {
        return this.baseService
            .get<ApiResponse<SlotProviders[]>>('', {
                type: 'slot',
                platform: 'desktop',
                ...params,
            })
            .pipe(map((res) => res.data));
    }

    getSlotByProviders(providerId: string, params = {}): Observable<Slot> {
        return this.baseService
            .get<ApiResponse<Slot>>(`/v2/slot/providers/${providerId}`, { platform: 'desktop', ...params })
            .pipe(map((res) => res.data));
    }
}
