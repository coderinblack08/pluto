import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Textarea,
  useColorMode,
} from '@chakra-ui/core';
import { useField } from 'formik';
import { ExclamationCircle } from 'heroicons-react';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> &
  InputProps & {
    label: string;
    name: string;
    textarea?: boolean;
    checkbox?: boolean;
    isRequired?: boolean;
  };

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  checkbox,
  size: _,
  isRequired = false,
  ...props
}) => {
  let InputOrTextarea: any = Input;

  if (textarea) {
    InputOrTextarea = Textarea;
  }

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [field, { error, touched }] = useField(props);

  if (checkbox) {
    return (
      <Checkbox colorScheme="indigo" {...field} {...props}>
        {label}
      </Checkbox>
    );
  }

  return (
    <FormControl isInvalid={!!error && touched} isRequired={isRequired}>
      <FormLabel
        htmlFor={field.name}
        className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        mb={1}
      >
        {label}
      </FormLabel>
      <InputOrTextarea
        {...field}
        {...props}
        id={field.name}
        color={isDark ? 'gray.200' : undefined}
        bgColor="rgba(255, 255, 255, 0.06)"
        borderColor={isDark ? 'gray.700' : 'gray.300'}
        _focus={{ shadow: 'outline', bgColor: 'rgba(255, 255, 255, 0.04)' }}
        shadow="sm"
        px={3}
      />
      {!!error && touched ? (
        <FormErrorMessage>
          <ExclamationCircle size={16} className="mr-2" />
          {error}
        </FormErrorMessage>
      ) : null}
    </FormControl>
  );
};
