import { Game } from './game';

export interface Slot {
    type: string;
    provider: string;
    vendor: string;
    iframeW: number;
    iframeH: number;
    name: string;
    order: number;
    tags: string[];
    games: Game[];
    totalGames: number;
}
