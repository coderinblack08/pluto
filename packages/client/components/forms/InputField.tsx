import classNames from 'classnames';
import { useField } from 'formik';
import { ExclamationCircle } from 'heroicons-react';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
  wrapper?: string;
  labelStyles?: string;
  textarea?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  wrapper,
  textarea,
  labelStyles,
  size: _,
  children,
  ...props
}) => {
  const [field, { error }] = useField(props);
  const hasError = !!error;
  return (
    <div className={wrapper || undefined}>
      <label
        htmlFor={field.name}
        className={labelStyles || 'font-semibold text-gray-700'}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        id={field.name}
        className={classNames(
          props.className
            ? props.className
            : 'mt-1 px-3 py-2 rounded-md border focus:outline-none focus:shadow-outline w-full transition ease duration-200 shadow-sm',
          {
            'border-2 border-red-300 text-red-600 focus:shadow-error': hasError,
          }
        )}
      />
      {hasError ? (
        <p className="flex items-center text-red-500 mt-1">
          <ExclamationCircle size={18} className="mr-1" />
          {error}
        </p>
      ) : null}
    </div>
  );
};
