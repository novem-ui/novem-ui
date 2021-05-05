import colors from './colors'
import * as typography from './typography'
import spacing from './spacing'
import { WeightedColorKey } from '../types'

const theme = {
  colors,
  typography,
  spacing,
}

export type BaseColor = `${keyof typeof colors.palette}`
export type Color = `${keyof typeof colors.palette}.${WeightedColorKey}`
export type HeadingSizeValue = keyof typeof typography.headingFontSizes
export type SpacingValue = keyof typeof spacing
export type TextSizeValue = keyof typeof typography.textFontSizes
export type Theme = typeof theme


export default theme
