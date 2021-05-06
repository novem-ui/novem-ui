import { Property } from 'csstype'
import { SpacingValue } from '@novem-ui/theme'

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

export interface FontProps<T> {
  color: Property.Color
  fontFamily: Property.FontFamily
  fontSize: T | Property.FontSize
  fontWeight: Property.FontWeight
  lineHeight: Property.LineHeight
  letterSpacing: Property.LetterSpacing
  textAlign: Property.TextAlign
  fontStyle: Property.FontStyle
  textTransform: Property.TextTransform
  textDecoration: Property.TextDecoration
}

// Hierarchy
export type Hierarchy = 'loud' | 'quiet' | 'link'
