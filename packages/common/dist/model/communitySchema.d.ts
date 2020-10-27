import * as Yup from 'yup';
export declare const communitySchema: Yup.ObjectSchema<Yup.Shape<object | undefined, {
    name: string;
    email: string | undefined;
    website: string | undefined;
    about: string;
    location: any;
    tags: string[] | undefined;
    maxParticipants: number | undefined;
    isSchool: any;
    isPrivate: any;
    emailNotifications: any;
}>, object>;
