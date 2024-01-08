import { useForm } from 'react-hook-form'
import FormField from './/FormField'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import { InputField } from '../../../../core/types/formTypes/formTypes'

describe('FormField', () => {
  test('should render', () => {
    const field = {
      id: 'phone',
      required: true,
      type: 'text',
    }
    const { result } = renderHook(() => useForm({ mode: 'all' }))
    render(
      <FormField
        field={field as InputField}
        name={field.id}
        control={result.current.control}
      />
    )
  })

  test('should show phone number error', async () => {
    const field = {
      id: 'phone',
      required: true,
      type: 'text',
    }
    const { result } = renderHook(() => useForm({ mode: 'all' }))
    const { getByRole, getByText } = render(
      <FormField
        field={field as InputField}
        name={field.id}
        control={result.current.control}
      />
    )
    const inputElement = getByRole('textbox')
    inputElement.focus()
    fireEvent.change(inputElement, { target: { value: 'e' } })
    fireEvent.blur(inputElement)
    await waitFor(() => {
      expect(getByText('Phone number is invalid')).toBeDefined()
    })
  })

  test('should show email error', async () => {
    const field = {
      id: 'Email',
      required: true,
      type: 'text',
    }
    const { result } = renderHook(() => useForm({ mode: 'all' }))
    const { getByRole, getByText } = render(
      <FormField
        field={field as InputField}
        name={field.id}
        control={result.current.control}
      />
    )
    const inputElement = getByRole('textbox')
    inputElement.focus()
    fireEvent.change(inputElement, { target: { value: 'test' } })
    fireEvent.blur(inputElement)
    await waitFor(() => {
      expect(getByText('Email is invalid')).toBeDefined()
    })
  })
})
