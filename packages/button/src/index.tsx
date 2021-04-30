import styled from '@emotion/styled'
import { getBackgroundColor, getColor } from '@novem-ui/utils'

import { getFontSize, getPadding, getCursor } from './utils'
import { ButtonProps } from './types'

export const Button = styled.div<ButtonProps>`
  background-color: ${getBackgroundColor};
  border-radius: 6.25rem;
  color: ${getColor};
  cursor: ${getCursor};
  display: inline-block;
  font-size: ${getFontSize};
  font-weight: 600;
  padding: ${getPadding};
  transition: 0.4s;

  &:hover {
    box-shadow: 0 0 0.25rem ${getBackgroundColor};
    transition: 0.4s;
  }
`

Button.defaultProps = {
  hierarchy: 'loud',
  size: 'md',
}

export default Button
