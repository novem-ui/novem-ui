import { css } from '@emotion/react'
import { Theme, BaseColor } from '@novem-ui/theme'

export interface BorderColorProps {
  theme?: Theme
  baseColor?: BaseColor
}

const borderColor = ({ theme: { colors }, baseColor }: BorderColorProps) => {
  const colorScheme: BaseColor = baseColor || colors.base

  const style = css`
    border-color: ${colors.palette[colorScheme][500]};
  `

  return style
}

export default borderColor