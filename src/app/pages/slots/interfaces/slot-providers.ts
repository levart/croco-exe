import { Game } from './game';

export interface SlotProviders {
    _id: string;
    iframeW: number;
    iframeH: number;
    order: number;
    name: string;
    provider: string;
    vendor: string;
    type: string;
    enabled: boolean;
    logo: string;
    tags: string[];
    gamesCount: number;
}
