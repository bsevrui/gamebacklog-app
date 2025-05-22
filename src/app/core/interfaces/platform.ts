import { Game } from "./game";

export interface Platform {
    id: number;
    name: string;
    releaseDate: Date;
    detail?: string;
    picture?: string;
    // games
}