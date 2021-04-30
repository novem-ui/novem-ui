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
