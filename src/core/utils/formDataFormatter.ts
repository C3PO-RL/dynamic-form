import { FormData, InputField } from '../types/formTypes/formTypes'

export const formDataFormatter = (
  fields: (InputField[] | InputField)[],
  formData: FormData
): object[] => {
  const formattedData = fields.map((field) => {
    if (Array.isArray(field)) {
      return field.map((f) => {
        return {
          [f.id]: formData[f.id as keyof FormData],
        } as object
      })
    } else {
      return {
        [field.id]: formData[field.id as keyof FormData],
      } as object
    }
  })

  return formattedData
}
