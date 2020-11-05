import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  useColorMode,
  Checkbox,
  ComponentWithAs,
  InputProps,
  TextareaProps,
} from '@chakra-ui/core';
import { ExclamationCircle } from 'heroicons-react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
  checkbox?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  checkbox,
  size: _,
  ...props
}) => {
  let InputOrTextarea:
    | ComponentWithAs<'input', InputProps>
    | ComponentWithAs<'textarea', TextareaProps> = Input;

  if (textarea) {
    InputOrTextarea = Textarea;
  }

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [field, { error }] = useField(props);

  if (checkbox) {
    return (
      <Checkbox colorScheme="indigo" {...field} {...props}>
        {label}
      </Checkbox>
    );
  }

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel
        htmlFor={field.name}
        className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
      >
        {label}
      </FormLabel>
      <Input
        {...field}
        {...props}
        id={field.name}
        bgColor="rgba(255, 255, 255, 0.06)"
        borderColor={isDark ? 'gray.700' : 'gray.300'}
        _focus={{ shadow: 'outline' }}
        shadow="sm"
      />
      {error ? (
        <FormErrorMessage>
          <ExclamationCircle />
          {error}
        </FormErrorMessage>
      ) : null}
    </FormControl>
  );
};
