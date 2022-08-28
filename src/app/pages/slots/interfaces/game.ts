export interface Game {
    game_id: string;
    name: string;
    provider: string;
    image: string;
    url: string;
    order: number;
    tags: string[];
    gameId: string;
    image2: string;
    platform?: string;
    providerName?: string;
}
