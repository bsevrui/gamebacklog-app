export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    registrationDate: Date;
    birthdate: Date;
    first_name?: string | null;
    last_name?: string | null;
    profilePicture?: string | null;
}