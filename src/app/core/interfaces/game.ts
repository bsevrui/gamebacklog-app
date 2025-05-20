import { Genre } from "./genre";
import { Platform } from "./platform";

export interface Game {
    id: number;
    title: string;
    type: string;
    cover?: string;
    genres?: Genre[];
    platforms?: Platform[];
}