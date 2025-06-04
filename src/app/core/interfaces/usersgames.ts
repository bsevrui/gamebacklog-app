import { Game } from "./game";

export interface UsersGames {
    userId: number;
    gameId: number;
    status: 'Playing' | 'Completed' | 'Played' | 'On-Hold' | 'Plan-To-Play' | 'Dropped';
    installed: boolean;
    platinum: boolean;
    game: Game;
    score?: number;
}