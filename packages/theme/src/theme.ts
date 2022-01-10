import colors from './colors'
import typography from './typography'
import spacing from './spacing'
import shadows from './shadows'
import type { WeightedColorKey } from '../types'

const theme = {
  colors,
  typography,
  spacing,
  shadows
}

export type BaseColor = `${keyof typeof colors.palette}`
export type Shadows = `${keyof typeof shadows}`
export type Color = `${keyof typeof colors.palette}.${WeightedColorKey}`
export type HeadingSizeValue = keyof typeof typography.headingFontSizes
export type SpacingValue = keyof typeof spacing
export type TextSizeValue = keyof typeof typography.textFontSizes
export type Theme = typeof theme

export default theme
