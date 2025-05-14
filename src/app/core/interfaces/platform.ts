export interface Platform {
    id: number;
    name: string;
    releaseDate: Date;
    detail?: string | null;
    picture?: string | null;
}