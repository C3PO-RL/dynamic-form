export interface InputField {
  id: string
  type: 'text' | 'select' | 'textarea'
  placeholder?: string
  required?: boolean
  options?: string[]
}

export interface FormFields {
  fields: (InputField[] | InputField)[]
}

export interface FormData {
  firstName: string
  lastName: string
  Email: string
  address1: string
  city: string
  state: string
  zip: string
  phone: string
  jobTitle: string
  reason: string
}

export type FormDataFormatted = (FormData | { [key: string]: string })[]
