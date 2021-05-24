import { Theme } from '@novem-ui/theme'
import { ButtonProps } from '../types'

export interface ButtonUtilProps extends ButtonProps {
  theme: Theme
}

export const getPadding = ({ size, theme }: ButtonUtilProps) => {
  const { spacing } = theme

  switch (size) {
    case 'lg':
      return `${spacing['3.5']}rem ${spacing['6']}rem`
    case 'md':
      return `${spacing['1.5']}rem ${spacing['4']}rem`
    case 'sm':
      return `${spacing['1.2']}rem ${spacing['3']}rem`
  }
}

export const getFontSize = ({ theme, size }: ButtonUtilProps) => {
  const { textFontSizes } = theme.typography
  const variants = {
    lg: textFontSizes.md,
    md: textFontSizes.sm,
    sm: textFontSizes.xs
  }

  return `${variants[size]}px`
}

export const getCursor = ({ disabled }: ButtonUtilProps) => (disabled ? 'auto' : 'pointer')

export const getDisabledBackgroundColor = ({ theme, hierarchy }: ButtonUtilProps) => {
  return theme.colors.disabled.background[hierarchy]
}
