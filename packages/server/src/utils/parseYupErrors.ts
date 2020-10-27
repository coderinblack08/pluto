import { Error } from '../types/graphql/shared/Error';
import { ValidationError } from 'yup';

export const parseYupErrors = (errors: ValidationError): Error => {
  return {
    field: errors.path,
    message: errors.errors[0],
  };
};
