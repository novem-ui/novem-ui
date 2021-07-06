import { css, Theme } from '@emotion/react'
import { TypographyProps, TextComponentType } from '../types'
import { getColor, getFontSizes } from './utils'

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
    fontStyle,
    theme,
    variantCaps,
    variantNumeric,
    weight,
    whiteSpace,
    wordBreak,
    wordSpacing,
    writingMode
  }: TypographyProps<As, Size> & { theme?: Theme },
  component: TextComponentType
) {
  const { fontSize, defaultFontSize } = getFontSizes<As, Size>({ size, component, theme, as })
  const styles = css`
    color: ${getColor({ theme, color })};
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
    ${fontStyle && `font-style: ${fontStyle};`}
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
