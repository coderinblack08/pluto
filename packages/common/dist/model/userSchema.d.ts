import * as Yup from 'yup';
export declare const registerSchema: Yup.ObjectSchema<Yup.Shape<object | undefined, {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}>, object>;
export declare const loginSchema: Yup.ObjectSchema<Yup.Shape<object | undefined, {
    email: string;
    password: string;
}>, object>;
