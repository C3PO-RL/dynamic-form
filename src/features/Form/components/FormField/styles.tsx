import styled from 'styled-components'
import { Theme } from '../../../../core/theme/theme'

interface InputField {
  $border?: string
  $width?: string
}

export const CustomInput = styled.input<InputField>`
  border-radius: 5px;
  height: 30px;
  border: ${({ $border }: InputField) => ($border ? $border : '')};
  width: ${({ $width }: InputField) => ($width ? $width : '')};
`

export const CustomTextArea = styled.textarea<InputField>`
  border-radius: 5px;
  border: ${({ $border }: InputField) => ($border ? $border : '')};
  width: ${({ $width }: InputField) => ($width ? $width : '')};
`

export const CustomLabel = styled.label`
  color: solid 1px ${Theme.colors.info};
  font-size: 1em;
`

export const CustomSelect = styled.select<InputField>`
  border-radius: 5px;
  height: 30px;
  border: ${({ $border }: InputField) => ($border ? $border : '')};
  width: ${({ $width }: InputField) => ($width ? $width : '')};
`
