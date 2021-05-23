import { Property } from 'csstype'
import { Color, SpacingValue } from '@novem-ui/theme'
import { Theme } from '@emotion/react'

// Spacing types
export type SpacingPropName =
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'margin'
  | 'marginX'
  | 'marginY'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'p'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'
  | 'px'
  | 'py'
  | 'padding'
  | 'paddingX'
  | 'paddingY'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'

export type SpacingPropValue = SpacingValue | string

export type SpacingPropEntry = [SpacingPropName, SpacingPropValue]

export type SpacingProps = { [key in SpacingPropName]?: SpacingPropValue }

export type CSSSpacingProps = Omit<
  SpacingProps,
  'm' | 'mt' | 'mr' | 'mb' | 'ml' | 'mx' | 'my' | 'p' | 'pt' | 'pr' | 'pb' | 'pl' | 'px' | 'py'
>

// Text types

export interface TypographyProps<As, Size> {
  align?: Property.TextAlign
  as?: As
  color?: Color | Property.Color
  decoration?: Property.TextDecoration
  direction?: Property.Direction
  family?: Property.FontFamily
  kerning?: Property.FontKerning
  letterSpacing?: Property.LetterSpacing
  lineHeight?: Property.LineHeight
  orientation?: Property.TextOrientation
  transform?: Property.TextTransform
  size?: Size | Property.FontSize
  shadow?: Property.TextShadow
  stretch?: Property.FontStretch
  fontStyle?: Property.FontStyle
  theme?: Theme
  variantCaps?: Property.FontVariantCaps
  variantNumeric?: Property.FontVariantNumeric
  weight?: Property.FontWeight
  whiteSpace?: Property.FontWeight
  wordBreak?: Property.WordBreak
  wordSpacing?: Property.WordSpacing
  writingMode?: Property.WritingMode
}

export type TextComponentType = 'heading' | 'text'
export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

// Hierarchy
export type Hierarchy = 'loud' | 'quiet' | 'link'
