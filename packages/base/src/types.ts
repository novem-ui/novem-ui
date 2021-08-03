import { Property } from 'csstype'
import { BaseColor, Color, SpacingValue } from '@novem-ui/theme'
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

// InputElement
export interface InputElementProps {
  theme?: Theme
  baseColor?: BaseColor
  error?: boolean | string | Error
  valid?: boolean
  disabled?: boolean
  readOnly?: boolean
}

// Layout

export interface LayoutProps {
  display?: Property.Display
  position?: Property.Position
  top?: Property.Top
  bottom?: Property.Bottom
  height?: Property.Height
  left?: Property.Left
  right?: Property.Right
  width?: Property.Width
}

// border

export interface BorderProps {
  border?: Property.Border
  borderBlock?: Property.BorderBlock
  borderBlockColor?: Property.BorderBlockColor
  borderBlockEnd?: Property.BorderBlockEnd
  borderBlockEndColor?: Property.BorderBlockEndColor
  borderBlockEndStyle?: Property.BorderBlockEndStyle
  borderBlockEndWidth?: Property.BorderBlockEndWidth
  borderBlockStart?: Property.BorderBlockStart
  borderBlockStartColor?: Property.BorderBlockStartColor
  borderBlockStartStyle?: Property.BorderBlockStartStyle
  borderBlockStartWidth?: Property.BorderBlockStartWidth
  borderBlockStyle?: Property.BorderBlockStyle
  borderBlockWidth?: Property.BorderBlockWidth
  borderBottom?: Property.BorderBottom
  borderBottomColor?: Property.BorderBottomColor
  borderBottomLeftRadius?: Property.BorderBottomLeftRadius
  borderBottomRightRadius?: Property.BorderBottomRightRadius
  borderBottomStyle?: Property.BorderBottomStyle
  borderBottomWidth?: Property.BorderBottomWidth
  borderCollapse?: Property.BorderCollapse
  borderColor?: Property.BorderColor
  borderEndEndRadius?: Property.BorderEndEndRadius
  borderEndStartRadius?: Property.BorderEndStartRadius
  borderInline?: Property.BorderInline
  borderInlineColor?: Property.BorderInlineColor
  borderInlineEnd?: Property.BorderInlineEnd
  borderInlineEndColor?: Property.BorderInlineEndColor
  borderInlineEndStyle?: Property.BorderInlineEndStyle
  borderInlineEndWidth?: Property.BorderInlineEndWidth
  borderInlineStart?: Property.BorderInlineStart
  borderInlineStartColor?: Property.BorderInlineStartColor
  borderInlineStartStyle?: Property.BorderInlineStartStyle
  borderInlineStartWidth?: Property.BorderInlineStartWidth
  borderInlineStyle?: Property.BorderInlineStyle
  borderInlineWidth?: Property.BorderInlineWidth
  borderLeft?: Property.BorderLeft
  borderLeftColor?: Property.BorderLeftColor
  borderLeftStyle?: Property.BorderLeftStyle
  borderLeftWidth?: Property.BorderLeftWidth
  borderRadius?: Property.BorderRadius
  borderRight?: Property.BorderRight
  borderRightColor?: Property.BorderRightColor
  borderRightStyle?: Property.BorderRightStyle
  borderRightWidth?: Property.BorderRightWidth
  borderSpacing?: Property.BorderSpacing
  borderStartEndRadius?: Property.BorderStartEndRadius
  borderStartStartRadius?: Property.BorderStartStartRadius
  borderStyle?: Property.BorderStyle
  borderTop?: Property.BorderTop
  borderTopColor?: Property.BorderTopColor
  borderTopLeftRadius?: Property.BorderTopLeftRadius
  borderTopRightRadius?: Property.BorderTopRightRadius
  borderTopStyle?: Property.BorderTopStyle
  borderTopWidth?: Property.BorderTopWidth
  borderWidth?: Property.BorderWidth
}
