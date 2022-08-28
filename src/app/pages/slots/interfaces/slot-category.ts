import { Game } from './game';

export interface SlotCategory {
    type: string;
    category: string;
    platform: string;
    name: string;
    order: number;
    games: Game[];
    totalGames: number;
    group: string;
    provider: string;

    active?: boolean;
}
