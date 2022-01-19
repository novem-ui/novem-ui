import { Theme } from '@emotion/react'
import get from 'lodash.get'
import { HeadingTags, TextComponentType, TypographyProps } from '../../types'

export interface GetFontSizesConfig {
  component: TextComponentType
  theme: Theme
}

export function getHeadingFontSize(level: HeadingTags = 'h1', sizes: Theme['typography']['headingFontSizes']) {
  const mappedSizes = {
    h1: sizes.xxl,
    h2: sizes.xl,
    h3: sizes.lg,
    h4: sizes.md,
    h5: sizes.sm,
    h6: sizes.xs
  }

  return mappedSizes[level]
}

export function getFontSizes<As, Size>({
  size,
  component,
  theme,
  as
}: Pick<TypographyProps<As, Size>, 'size' | 'as'> & GetFontSizesConfig) {
  const isHeading = component === 'heading'
  const { typography } = theme
  const fontSizes = typography[isHeading ? 'headingFontSizes' : 'textFontSizes']
  const fontSize = (fontSizes[size as keyof typeof fontSizes]
    ? `${fontSizes[size as keyof typeof fontSizes]}px`
    : size) as string
  const defaultFontSize = isHeading
    ? `${getHeadingFontSize(as as any, fontSizes as Theme['typography']['headingFontSizes'])}px`
    : `${fontSizes.md}px`

  return { fontSize, defaultFontSize }
}

export function getColor({ theme, color }: TypographyProps<string, string>) {
  if (color === 'theme') {
    return theme.colors.palette[theme.colors.base]['500']
  }

  const colorValue = get(theme.colors.palette, color)

  return colorValue || color
}
