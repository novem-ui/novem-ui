import { darken as pDarken, transparentize } from 'polished'
import map from './map'

import type { WeightedColor, WeightedColorKey } from '../../types'

const lighten = (weight: number, color: string) => transparentize(map(weight, 400, 100, 0.15, 0.85), color)

const darken = (weight: number, color: string) => pDarken(map(weight, 600, 900, 0.05, 0.4), color)

const createColorMap = (color: string) => {
  const colors: Partial<WeightedColor> = { '500': color }
  const ligtherColors: WeightedColorKey[] = ['50', '100', '200', '300', '400']
  const darkerColors: WeightedColorKey[] = ['600', '700', '800', '900']

  for (const lighterColorWeight of ligtherColors) {
    colors[lighterColorWeight] = lighten(Number(lighterColorWeight), color)
  }

  for (const darkerColorWeight of darkerColors) {
    colors[darkerColorWeight] = darken(Number(darkerColorWeight), color)
  }

  return colors as WeightedColor
}

export default createColorMap
