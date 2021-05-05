import { Theme } from '@novem-ui/theme'
import { ButtonSize } from '../types'

export const getPadding = (props) => {
  const { size, theme } = props
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

export const getFontSize = ({ theme, size }: { theme: Theme; size: ButtonSize }) => {
  const { textFontSizes } = theme.typography
  const variants = {
    lg: textFontSizes.md,
    md: textFontSizes.sm,
    sm: textFontSizes.xs,
  }

  return `${variants[size]}px`
}

export const getCursor = (props) => (props.disabled ? 'auto' : 'pointer')

export const getDisabledBackgroundColor = (props) => {
  const { theme, hierarchy } = props
  return theme.colors.disabled.background[hierarchy]
}
