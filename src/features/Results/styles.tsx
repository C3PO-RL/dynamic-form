import styled from 'styled-components'
import { Theme } from '../../core/theme/theme'

export const TextContainer = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0px 0px 10px 0px;
`

export const Container = styled.div`
  border: solid 1px ${Theme.colors.primary};
  box-shadow: 0 0 5px 0px ${Theme.colors.success};
  border-radius: 15px;
  padding: 15px;
`

export const CustomBackButton = styled.button`
  border: solid 1px ${Theme.colors.success};
  background-color: ${Theme.colors.success};
  width: 50%;
`
