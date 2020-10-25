import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .max(255, 'Full Name exceeds the character limit')
    .required('Full name is required'),
  email: Yup.string()
    .email()
    .max(255, 'Email Address exceeds the character limit')
    .required('Email Address is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .max(255, 'Email Address exceeds the character limit')
    .required('Email Address is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});
