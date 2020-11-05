import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/core';
import { useField } from 'formik';
import { ExclamationCircle } from 'heroicons-react';
import React, { InputHTMLAttributes, ReactNode } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string | ReactNode;
  name: string;
  wrapper?: string;
  labelStyles?: string;
  textarea?: boolean;
  footer?: string;
  isRequired?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  wrapper,
  textarea = false,
  labelStyles,
  size: _,
  footer,
  children,
  placeholder,
  isRequired,
  ...props
}) => {
  const [field, { error }] = useField(props);

  let InputOrTextarea: any = Input;

  if (textarea) {
    InputOrTextarea = Textarea;
  }

  return (
    <FormControl isInvalid={!!error} isRequired={isRequired || false}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputOrTextarea
        {...field}
        {...props}
        id={field.name}
        errorBorderColor="red.300"
        borderColor="gray.300"
        className="border focus:outline-none focus:border-blue-300 focus:shadow-outline-blue"
      />
      {error ? (
        <FormErrorMessage>
          <ExclamationCircle size={18} className="mr-1" />
          {error}
        </FormErrorMessage>
      ) : null}
    </FormControl>
    // <div className={wrapper || undefined}>
    //   <label
    //     htmlFor={field.name}
    //     className={labelStyles || 'font-semibold text-gray-700 text-sm'}
    //   >
    //     {label}
    //   </label>
    //   {!textarea ? (
    //     <input
    //       {...field}
    //       {...props}
    //       id={field.name}
    //       className={classNames(
    //         props.className
    //           ? props.className
    //           : 'text-gray-800 mt-1 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-300 focus:shadow-outline-blue w-full transition ease duration-200 shadow-sm',
    //         {
    //           'border-2 border-red-400 text-red-600 focus:shadow-error': hasError,
    //           'focus:border focus:border-blue-400': !hasError,
    //         }
    //       )}
    //     />
    //   ) : (
    //     <div>
    //       <textarea
    //         {...field}
    //         {...props}
    //         id={field.name}
    //         className={classNames(
    //           props.className
    //             ? props.className
    //             : 'text-gray-800 mt-1 px-3 py-2 h-32 border focus:outline-none focus:border-blue-300 focus:shadow-outline-blue w-full transition ease duration-200 shadow-sm',
    //           {
    //             'border-2 border-red-400 text-red-600 focus:shadow-error': hasError,
    //             'focus:border focus:border-blue-400': !hasError,
    //             'rounded-t-md': !!footer,
    //             'rounded-md': !footer,
    //           }
    //         )}
    //       />
    //       {!!footer ? (
    //         <div className="w-full px-3 py-1 bg-gray-50 border rounded-b -mt-2">
    //           <p className="text-sm text-gray-600 mt-1 leading-6">{footer}</p>
    //         </div>
    //       ) : null}
    //     </div>
    //   )}
    //   {hasError ? (
    //     <p className="flex items-center text-red-500 mt-2">
    //       <ExclamationCircle size={18} className="mr-1" />
    //       {error}
    //     </p>
    //   ) : null}
    // </div>
  );
};
