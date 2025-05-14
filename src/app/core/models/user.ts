export interface user {
    iduser: number;
    email: string;
    username: string;
    password: string;
    birthdate: Date;
    registrationdate: Date;
    first_name?: string;
    profilepicture?: string;
    last_name?: string;
}