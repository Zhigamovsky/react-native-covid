import styled from 'styled-components/native'

import { FONT } from '../../utils'
import { StyledTextProps } from './types'

export const Label = styled.Text<StyledTextProps>`
  ${FONT('Medium', 14)}
  padding: 20px 10px 5px;
  ${({inlineStyle}) => inlineStyle || ''}
`