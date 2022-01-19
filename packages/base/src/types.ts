import { Property } from 'csstype'
import { BaseColor, Color, SpacingValue } from '@novem-ui/theme'
import { Theme } from '@emotion/react'

export type NovemColor = Color | Property.Color | 'theme'

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

export type SpacingPropValue = SpacingValue | Property.Margin | Property.Padding

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
  color?: Color | Property.Color | 'theme'
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
  isOpen?: boolean // dropdown specific
}

// Layout
export interface LayoutProps {
  display?: Property.Display
  position?: Property.Position
  top?: Property.Top | SpacingPropValue
  bottom?: Property.Bottom | SpacingPropValue
  height?: Property.Height | SpacingPropValue
  left?: Property.Left | SpacingPropValue
  maxHeight?: Property.Height | SpacingPropValue
  maxWidth?: Property.Width | SpacingPropValue
  right?: Property.Right | SpacingPropValue
  width?: Property.Width | SpacingPropValue
  zIndex?: Property.ZIndex
}

// border
export interface BorderProps {
  border?: Property.Border
  borderBlock?: Property.BorderBlock
  borderBlockColor?: NovemColor
  borderBlockEnd?: Property.BorderBlockEnd
  borderBlockEndColor?: NovemColor
  borderBlockEndStyle?: Property.BorderBlockEndStyle
  borderBlockEndWidth?: Property.BorderBlockEndWidth
  borderBlockStart?: Property.BorderBlockStart
  borderBlockStartColor?: NovemColor
  borderBlockStartStyle?: Property.BorderBlockStartStyle
  borderBlockStartWidth?: Property.BorderBlockStartWidth
  borderBlockStyle?: Property.BorderBlockStyle
  borderBlockWidth?: Property.BorderBlockWidth
  borderBottom?: Property.BorderBottom
  borderBottomColor?: NovemColor
  borderBottomLeftRadius?: Property.BorderBottomLeftRadius
  borderBottomRightRadius?: Property.BorderBottomRightRadius
  borderBottomStyle?: Property.BorderBottomStyle
  borderBottomWidth?: Property.BorderBottomWidth
  borderCollapse?: Property.BorderCollapse
  borderColor?: NovemColor
  borderEndEndRadius?: Property.BorderEndEndRadius
  borderEndStartRadius?: Property.BorderEndStartRadius
  borderInline?: Property.BorderInline
  borderInlineColor?: NovemColor
  borderInlineEnd?: Property.BorderInlineEnd
  borderInlineEndColor?: NovemColor
  borderInlineEndStyle?: Property.BorderInlineEndStyle
  borderInlineEndWidth?: Property.BorderInlineEndWidth
  borderInlineStart?: Property.BorderInlineStart
  borderInlineStartColor?: NovemColor
  borderInlineStartStyle?: Property.BorderInlineStartStyle
  borderInlineStartWidth?: Property.BorderInlineStartWidth
  borderInlineStyle?: Property.BorderInlineStyle
  borderInlineWidth?: Property.BorderInlineWidth
  borderLeft?: Property.BorderLeft
  borderLeftColor?: NovemColor
  borderLeftStyle?: Property.BorderLeftStyle
  borderLeftWidth?: Property.BorderLeftWidth
  borderRadius?: Property.BorderRadius
  borderRight?: Property.BorderRight
  borderRightColor?: NovemColor
  borderRightStyle?: Property.BorderRightStyle
  borderRightWidth?: Property.BorderRightWidth
  borderSpacing?: Property.BorderSpacing
  borderStartEndRadius?: Property.BorderStartEndRadius
  borderStartStartRadius?: Property.BorderStartStartRadius
  borderStyle?: Property.BorderStyle
  borderTop?: Property.BorderTop
  borderTopColor?: NovemColor
  borderTopLeftRadius?: Property.BorderTopLeftRadius
  borderTopRightRadius?: Property.BorderTopRightRadius
  borderTopStyle?: Property.BorderTopStyle
  borderTopWidth?: Property.BorderTopWidth
  borderWidth?: Property.BorderWidth
}

// background
export interface BackgroundProps {
  background?: Property.Background
  backgroundAttachment?: Property.BackgroundAttachment
  backgroundBlendMode?: Property.BackgroundBlendMode
  backgroundClip?: Property.BackgroundClip
  backgroundColor?: NovemColor
  backgroundImage?: Property.BackgroundImage
  backgroundOrigin?: Property.BackgroundOrigin
  backgroundPosition?: Property.BackgroundPosition
  backgroundPositionX?: Property.BackgroundPositionX
  backgroundPositionY?: Property.BackgroundPositionY
  backgroundRepeat?: Property.BackgroundRepeat
  backgroundSize?: Property.BackgroundSize
}

// flex
export interface FlexProps {
  direction?: Property.FlexDirection
  wrap?: Property.FlexWrap
  basis?: Property.FlexBasis
  grow?: Property.FlexGrow
  shrink?: Property.FlexShrink
  align?: Property.AlignItems
  justify?: Property.JustifyContent
}
