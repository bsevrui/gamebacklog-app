import { UsersGames } from "./usersgames/usersgames";

export interface User {
    id: number;
    email: string;
    username: string;
    registrationDate: Date;
    birthdate: Date;
    password?: string;
    firstName?: string;
    lastName?: string;
    profilePicture?: string;
    games?: UsersGames[];
}