import { BaseColor, Theme } from '@novem-ui/theme'
import { WeightedColor, WeightedColorKey } from '@novem-ui/theme/types'

import { NovemColor } from '../types'

export interface GetWeightedColorFromBaseProps {
  theme: Theme
  weight: WeightedColorKey
  baseColor?: BaseColor
}

const determineColor = (color: NovemColor) => {
  if (color.includes('.')) {
    const parsedColor = color.split('.')

    if (parsedColor.length === 2) {
      const [value, weight] = parsedColor as [BaseColor, WeightedColorKey]
      return { value, weight }
    }
  }

  return { value: color }
}

const getColor = ({ colors }: Theme) => (color: NovemColor) => {
  const { value, weight } = determineColor(color)

  if (value && weight) {
    const palette: WeightedColor | undefined = colors.palette[value as BaseColor]
    const colorResult = palette && palette[weight as WeightedColorKey]

    /* istanbul ignore else */
    if (colorResult) {
      return colorResult
    }
  }

  return color
}

export const getWeightedColorFromBase = ({ theme, baseColor, weight }: GetWeightedColorFromBaseProps) => {
  const color = `${baseColor || theme.colors.base}.${weight}`

  return getColor(theme)(color)
}

export default getColor
