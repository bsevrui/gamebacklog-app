import { Genre } from "./genre";

export interface Game {
    id: number;
    title: string;
    type: string;
    genres: Genre[] | null;
    cover?: string | null;
}