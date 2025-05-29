import { UsersGames } from "./usersgames";

export interface User {
    id: number;
    email: string;
    username: string;
    registrationDate: Date;
    birthdate: Date;
    password?: string;
    first_name?: string;
    last_name?: string;
    profilePicture?: string;
    games?: UsersGames[];
}