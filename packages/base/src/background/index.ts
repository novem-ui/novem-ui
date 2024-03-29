import { css } from '@emotion/react'
import { Theme } from '@novem-ui/theme'

import getColor from '../utils/get-color'
import { BackgroundProps } from '../types'

const background = ({
  background,
  backgroundAttachment,
  backgroundBlendMode,
  backgroundClip,
  backgroundColor,
  backgroundImage,
  backgroundOrigin,
  backgroundPosition,
  backgroundPositionX,
  backgroundPositionY,
  backgroundRepeat,
  backgroundSize,
  theme
}: BackgroundProps & { theme: Theme }) => css`
  ${background && `background: ${background};`}
  ${backgroundAttachment && `background-attachment: ${backgroundAttachment};`}
  ${backgroundAttachment && `background-blend-mode: ${backgroundBlendMode};`}
  ${backgroundClip && `background-clip: ${backgroundClip};`}
  ${backgroundColor && `background-color: ${getColor(theme)(backgroundColor)};`}
  ${backgroundImage && `background-image: ${backgroundImage};`}
  ${backgroundOrigin && `background-origin: ${backgroundOrigin};`}
  ${backgroundPosition && `background-position: ${backgroundPosition};`}
  ${backgroundPositionX && `background-position-x: ${backgroundPositionX};`}
  ${backgroundPositionY && `background-position-y: ${backgroundPositionY};`}
  ${backgroundRepeat && `background-repeat: ${backgroundRepeat};`}
  ${backgroundSize && `background-size: ${backgroundSize};`}
`
export default background
