export interface CreateUserGame {
    userId: number;
    gameId: number;
    status: 'Playing' | 'Completed' | 'Played' | 'On-Hold' | 'Plan-To-Play' | 'Dropped';
    installed: boolean;
    platinum: boolean;
    score?: number;
}