import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import FormField from './components/FormField/FormField'
import { GridColumnLayout } from '../../shared/styles/globalStyles'
import {
  FormData,
  FormDataFormatted,
  FormFields,
} from '../../core/types/formTypes/formTypes'
import { useCheckMobile } from '../../shared/hooks/useCheckMobile'
import { useAppDispatch } from '../../redux/store/hooks'
import { updateFormState } from '../../redux/slices/formSlice/formSlice'
import { useNavigate } from 'react-router-dom'
import { CustomForm, CustomSubmitButton } from './styles'
import { FC } from 'react'
import { formDataFormatter } from '../../core/utils/formDataFormatter'

const DynamicForm: FC<FormFields> = ({ fields }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm({ mode: 'all' })
  const navigate = useNavigate()
  const disptach = useAppDispatch()
  const isMobile = useCheckMobile()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formattedData = formDataFormatter(fields, data as FormData)
    disptach(updateFormState(formattedData as FormDataFormatted))
    navigate('/results')
    reset()
  }

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={index}>
          {Array.isArray(field) ? (
            <GridColumnLayout
              $columns={`repeat(${
                !isMobile ? field.length : 1
              }, minmax(0%, 100%))`}
            >
              {field.map((subField, subIndex) => (
                <FormField
                  isMobile={isMobile}
                  key={subIndex}
                  control={control}
                  field={subField}
                  name={subField.id}
                />
              ))}
            </GridColumnLayout>
          ) : (
            <FormField
              isMobile={isMobile}
              key={index}
              control={control}
              field={field}
              name={field.id}
            />
          )}
        </div>
      ))}
      <CustomSubmitButton disabled={!isValid || isSubmitting} type='submit'>
        Submit
      </CustomSubmitButton>
    </CustomForm>
  )
}

export default DynamicForm
