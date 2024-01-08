import styled from 'styled-components'
import { Theme } from '../../core/theme/theme'

export const CustomForm = styled.form`
  border: solid 1px ${Theme.colors.success};
  padding: 15px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 5px 0px ${Theme.colors.success};
`
export const CustomSubmitButton = styled.button`
  border: solid 1px ${Theme.colors.success};
  background-color: ${Theme.colors.success};
`
