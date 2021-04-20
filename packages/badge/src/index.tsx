import styled from '@emotion/styled'
import { getBackgroundColor, getColor } from '@novem-ui/utils'

import { getFontSize, getPadding } from './utils'
import { BadgeProps } from './types'

export const Badge = styled.span<BadgeProps>`
  background-color: ${getBackgroundColor};
  border-radius: ${({ theme }) => theme.size[4]}rem;
  color: ${getColor};
  display: inline-block;
  font-size: ${getFontSize};
  font-weight: 600;
  line-height: ${({ size }) => `${size === 'lg' ? 1.2 : 1}`};
  padding: ${getPadding};
  text-transform: uppercase;
`

Badge.defaultProps = {
  hierarchy: 'loud',
  size: 'lg',
}

export default Badge
