export interface user {
    iduser: number;
    email: string;
    username: string;
    password: string;
    registrationdate: Date;
    birthdate: Date;
    first_name?: string;
    last_name?: string;
    profilepicture?: string;
}