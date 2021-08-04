import { BaseColor, Theme } from '@novem-ui/theme'
import { WeightedColorKey } from '@novem-ui/theme/types'

import { NovemColor } from '../types'

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
    const palette = colors.palette[value]
    const colorResult = palette && palette[weight]

    /* istanbul ignore else */
    if (colorResult) {
      return colorResult
    }
  }

  return color
}

export default getColor
