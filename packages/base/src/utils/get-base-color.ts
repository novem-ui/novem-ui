import { Theme } from '@emotion/react'
import { BaseColor } from '@novem-ui/theme'
import { WeightedColorKey } from '@novem-ui/theme/types'

const getBaseColor = (weight: WeightedColorKey) => ({
  theme: {
    colors: { palette, base }
  },
  baseColor
}: {
  theme?: Theme
  baseColor?: BaseColor
}) => palette[baseColor || base][weight]

export default getBaseColor
