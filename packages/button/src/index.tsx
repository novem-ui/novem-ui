import styled from '@emotion/styled'
import { getColor, getBackgroundColor } from '@novem-ui/base'

import { getFontSize, getPadding, getCursor, getDisabledBackgroundColor } from './utils'
import { ButtonProps } from './types'

export const Button = styled.button<ButtonProps>`
  background-color: ${getBackgroundColor};
  border-radius: 6.25rem;
  border: none;
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

  &:disabled {
    background-color: ${getDisabledBackgroundColor};

    &:hover {
      box-shadow: 0 0 0.25rem ${getDisabledBackgroundColor};
    }
  }
`

Button.defaultProps = {
  hierarchy: 'loud',
  size: 'md',
}

export default Button
