import { Game } from "./game";

export interface UsersGames {
    userId: number;
    gameId: number;
    status: string;
    installed: number;
    platinum: number;
    game: Game;
    score?: number;
}