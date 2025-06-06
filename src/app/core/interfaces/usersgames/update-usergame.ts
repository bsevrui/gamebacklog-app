export interface UpdateUserGame {
    status?: 'Playing' | 'Completed' | 'Played' | 'On-Hold' | 'Plan-To-Play' | 'Dropped';
    score?: number;
    installed?: boolean;
    platinum?: boolean;
}