export interface UsersGames {
    userId: number;
    gameId: number;
    status: string;
    installed: number;
    platinum: number;
    score?: number;
}