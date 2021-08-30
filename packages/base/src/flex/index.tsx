import { css } from '@emotion/react'

import { FlexProps } from '../types'

const flex = ({ direction, wrap, basis, grow, shrink, align, justify }: FlexProps) => css`
  ${align && `align-items: ${align};`}
  ${basis && `flex-basis: ${basis};`}
  ${justify && `justify-content: ${justify};`}
  ${direction && `flex-direction: ${direction};`}
  ${grow && `flex-grow: ${grow};`}
  ${shrink && `flex-shrink: ${shrink};`}
  ${wrap && `flex-wrap: ${wrap};`}
`

export default flex
