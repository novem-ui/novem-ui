import { css } from '@emotion/react'
import { Theme } from '@novem-ui/theme'
import { TypographyProps } from '../types'

type TextComponentType = 'heading' | 'text'
export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

function getHeadingFontSize(level: HeadingTags = 'h1', sizes: Theme['typography']['headingFontSizes']) {
  const mappedSizes = {
    h1: sizes.xxl,
    h2: sizes.xl,
    h3: sizes.lg,
    h4: sizes.md,
    h5: sizes.sm,
    h6: sizes.xs,
  }

  return mappedSizes[level]
}

function typography<As = string, Size = string>(
  {
    align,
    as,
    color,
    decoration,
    direction,
    family,
    kerning,
    letterSpacing,
    lineHeight,
    orientation,
    transform,
    size,
    shadow,
    stretch,
    style,
    theme,
    variantCaps,
    variantNumeric,
    weight,
    whiteSpace,
    wordBreak,
    wordSpacing,
    writingMode,
  }: TypographyProps<As, Size> & { theme: Theme },
  component: TextComponentType
) {
  const isHeading = component === 'heading'
  const { typography } = theme
  const fontSizes = typography[isHeading ? 'headingFontSizes' : 'textFontSizes']
  const fontSize = (fontSizes[size as keyof typeof fontSizes]
    ? `${fontSizes[size as keyof typeof fontSizes]}px`
    : size) as string
  const defaultFontSize = isHeading
    ? `${getHeadingFontSize(as as any, fontSizes as Theme['typography']['headingFontSizes'])}px`
    : `${fontSizes.md}px`

  const styles = css`
    color: ${color};
    font-size: ${fontSize || defaultFontSize};
    font-weight: ${weight};
    margin: 0;

    ${align && `text-align: ${align};`}
    ${decoration && `text-decoration: ${decoration};`}
    ${direction && `text-direction: ${direction};`}
    ${family && `font-family: ${family};`}
    ${kerning && `font-kerning: ${kerning};`}
    ${letterSpacing && `letter-spacing: ${letterSpacing};`}
    ${lineHeight && `line-height: ${lineHeight};`}
    ${orientation && `text-orientation: ${orientation};`}
    ${transform && `text-transform: ${transform};`}
    ${shadow && `text-shadow: ${shadow};`}
    ${stretch && `:font-stretch ${stretch};`}
    ${style && `font-style: ${style};`}
    ${variantCaps && `font-variant-caps: ${variantCaps};`}
    ${variantNumeric && `font-variant-numeric: ${variantNumeric};`}
    ${whiteSpace && `whiteSpace: ${whiteSpace};`}
    ${wordBreak && `word-break: ${wordBreak};`}
    ${wordSpacing && `word-spacing: ${wordSpacing};`}
    ${writingMode && `writing-mode: ${writingMode};`}
  `

  return styles
}

export default typography
