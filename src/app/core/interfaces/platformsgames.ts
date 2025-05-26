import { Platform } from "./platform";

export interface PlatformsGames {
    platformId: number;
    gameId: number;
    releaseDate: Date;
    platform: Platform;
}