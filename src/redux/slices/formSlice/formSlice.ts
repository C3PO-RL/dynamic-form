import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormDataFormatted } from '../../../core/types/formTypes/formTypes'

interface FormState {
  formData: FormDataFormatted
}

const initialState: FormState = {
  formData: [
    {
      firstName: '',
      lastName: '',
    },
    {
      Email: '',
    },
    {
      address1: '',
    },
    {
      city: '',
      state: '',
      zip: '',
    },
    {
      phone: '',
    },
    {
      jobTitle: '',
    },
    {
      reason: '',
    },
  ],
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormState: (state, action: PayloadAction<FormDataFormatted>) => {
      state.formData = action.payload
    },
  },
})

export const { updateFormState } = formSlice.actions

export default formSlice.reducer
