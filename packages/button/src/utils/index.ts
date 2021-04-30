import { getBackgroundColor as backgroundColor } from '@novem-ui/utils'

export const getPadding = props => {
  const { size, theme } = props
  const { spacing } = theme;

  switch (size) {
    case 'lg':
      return `${spacing['3.5']}rem ${spacing['6']}rem`
    case 'md':
      return `${spacing['2']}rem ${spacing['4']}rem`
    case 'sm':
      return `${spacing['1.2']}rem ${spacing['3']}rem`
  }
}

export const getFontSize = props => `${props.theme.typography.textFontSizes[props.size === 'lg' ? 'sm' : 'xs']}px`

export const getCursor = props => props.disabled ? 'auto' : 'pointer'

export const getBackgroundColor = props => {
  const { disabled, theme, hierarchy } = props

  if (disabled) {
    return theme.colors.disabled.background[hierarchy]
  }

  return backgroundColor
}
