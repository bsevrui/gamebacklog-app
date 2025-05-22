export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    registrationDate: Date;
    birthdate: Date;
    first_name?: string;
    last_name?: string;
    profilePicture?: string;
    // games
}