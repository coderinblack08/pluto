import * as Yup from 'yup';

export const communitySchema = Yup.object().shape({
  name: Yup.string()
    .max(255, 'Name exceeds the character limit')
    .required('Name is required'),
  email: Yup.string().email(),
  website: Yup.string().url(),
  about: Yup.string()
    .max(1e5, 'About exceeds the character limit')
    .required('About is required'),
  location: Yup.string(),
  category: Yup.string(),
  maxParticipants: Yup.number().min(0, 'Max Participants cannot be negative'),
  isSchool: Yup.boolean(),
  isPrivate: Yup.boolean(),
  emailNotifications: Yup.boolean(),
});
