import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form'
import { InputField } from '../../../../core/types/formTypes/formTypes'
import { FlexLayout, Text } from '../../../../shared/styles/globalStyles'
import { email, phone } from '../../../../core/constants/formValidations'
import {
  CustomInput,
  CustomLabel,
  CustomSelect,
  CustomTextArea,
} from './styles'

interface TextFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  field: InputField
  isMobile?: boolean
}

const FormField = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  field: { type, placeholder, id, options, required },
  isMobile,
  name,
  control,
}: TextFieldProps<TFieldValues, TName>) => {
  const {
    field: { value, onChange },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: {
      required: required ? 'This field is required' : '',
      validate:
        id.toLowerCase() === 'email'
          ? email
          : id.toLowerCase() === 'phone'
            ? phone
            : () => true,
    },
  })

  switch (type) {
    case 'text':
      return (
        <FlexLayout
          $flexDirection='column'
          $align={isMobile ? 'center' : ''}
          $justify={isMobile ? 'center' : ''}
        >
          <CustomLabel htmlFor={id}>{placeholder}</CustomLabel>
          <CustomInput
            $width={isMobile ? '80%' : '90%'}
            $border={invalid ? '1px solid red' : ''}
            onChange={onChange}
            value={value || ''}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            aria-invalid={!!error}
            aria-describedby={`${id}-error`}
          />
          {error && (
            <Text $color='red' $fontSize='0.5em'>
              {error?.message}
            </Text>
          )}
        </FlexLayout>
      )

    case 'textarea':
      return (
        <FlexLayout
          $flexDirection='column'
          $align={isMobile ? 'center' : ''}
          $justify={isMobile ? 'center' : ''}
        >
          <CustomLabel htmlFor={id}>{placeholder}</CustomLabel>
          <CustomTextArea
            style={{
              border: invalid ? '1px solid red' : '',
              margin: '5px 0',
              width: isMobile ? '80%' : '95%',
            }}
            $width={isMobile ? '80%' : '95%'}
            $border={invalid ? '1px solid red' : ''}
            onChange={onChange}
            value={value || ''}
            id={id}
            name={name}
            rows={10}
            placeholder={placeholder}
            aria-invalid={!!error}
            aria-describedby={`${id}-error`}
          />
          {error && (
            <Text $color='red' $fontSize='0.5em'>
              {error?.message}
            </Text>
          )}
        </FlexLayout>
      )
    case 'select':
      return (
        <FlexLayout
          $flexDirection='column'
          $align={isMobile ? 'center' : ''}
          $justify={isMobile ? 'center' : ''}
        >
          <CustomLabel htmlFor={id}>{placeholder}</CustomLabel>
          <CustomSelect
            onChange={onChange}
            value={value}
            id={id}
            name={name}
            $width={isMobile ? '80%' : ''}
            $border={invalid ? '1px solid red' : ''}
            aria-invalid={!!error}
          >
            <option value='' disabled>
              Select an option
            </option>
            {options &&
              options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </CustomSelect>
        </FlexLayout>
      )
    default:
      return null
  }
}

export default FormField
