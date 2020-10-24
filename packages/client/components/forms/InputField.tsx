import classNames from 'classnames';
import { useField } from 'formik';
import { ExclamationCircle } from 'heroicons-react';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
  textarea?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  children,
  ...props
}) => {
  const [field, { error }, helpers] = useField(props);
  return (
    <div>
      <label htmlFor={field.name} className="font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <input
        {...field}
        {...props}
        id={field.name}
        className={classNames(
          'form-input w-full transition ease duration-200',
          { 'border-2 border-red-400': error }
        )}
      />
      {error ? (
        <p className="flex items-center text-red-400 mt-1">
          <ExclamationCircle size={18} className="mr-1" />
          {error}
        </p>
      ) : null}
    </div>
  );
};
