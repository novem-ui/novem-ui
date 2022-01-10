import { css } from '@emotion/react'
import { Shadows, Theme } from '@novem-ui/theme'
import { Property } from 'csstype'

export interface ShadowProps {
  shadow?: Shadows | Property.BoxShadow
}

const shadows = ({ theme, shadow }: ShadowProps & { theme: Theme }) => {
  let shadowValue = shadow
  const valueFromTheme = shadow && theme.shadows[shadow as Shadows]

  if (valueFromTheme) {
    shadowValue = valueFromTheme
  }

  const style = css`
    ${shadowValue && `box-shadow: ${shadowValue};`}
  `

  return style
}

export default shadows
