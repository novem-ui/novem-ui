import { css } from '@emotion/react'
import { Theme, BaseColor } from '@novem-ui/theme'

import border from '../border'

export interface BorderColorProps {
  theme?: Theme
  baseColor?: BaseColor
}

const borderColor = ({ theme, baseColor }: BorderColorProps) => {
  const colorScheme: BaseColor = baseColor || theme.colors.base

  const style = css`
    ${border({ borderColor: `${colorScheme}.500`, theme })}
  `

  return style
}

export default borderColor
