import styled from '@emotion/styled'
import { getBackgroundColor, colorWithHierarchy } from '@novem-ui/base'

import { getFontSize, getPadding, getCursor, getDisabledBackgroundColor } from './utils'
import { ButtonProps } from './types'

export const Button = styled.button<ButtonProps>`
  ${colorWithHierarchy}
  border-radius: ${({ theme }) => theme.spacing[12]}rem;
  border: none;
  cursor: ${getCursor};
  display: inline-block;
  font-size: ${getFontSize};
  font-weight: 600;
  padding: ${getPadding};
  transition: 0.4s;

  &:hover {
    box-shadow: 0 0 ${({ theme }) => theme.spacing[1]}rem ${getBackgroundColor};
    transition: 0.4s;
  }

  &:disabled {
    background-color: ${getDisabledBackgroundColor};

    &:hover {
      box-shadow: 0 0 ${({ theme }) => theme.spacing[1]}rem ${getDisabledBackgroundColor};
    }
  }
`

Button.defaultProps = {
  hierarchy: 'loud',
  size: 'md',
}

export default Button
