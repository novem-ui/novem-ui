import styled from '@emotion/styled'
import { solidColorWithHierarchy, SpacingProps, spacing } from '@novem-ui/base'

import { getFontSize, getPadding } from './utils'
import { BadgeProps } from './types'

export const Badge = styled.span<BadgeProps & SpacingProps>`
  ${solidColorWithHierarchy}
  border-radius: ${({ theme }) => theme.spacing[4]}rem;
  display: inline-block;
  font-size: ${getFontSize};
  font-weight: 600;
  line-height: ${({ size }) => (size === 'lg' ? 1.2 : 1)};
  padding: ${getPadding};
  text-transform: uppercase;
  ${spacing}
`

Badge.defaultProps = {
  hierarchy: 'loud',
  size: 'lg'
}

export default Badge
