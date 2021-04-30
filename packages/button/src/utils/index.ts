export const getPadding = props => {
  const { size } = props
  switch (size) {
    case 'lg':
      return '0.875rem 1.5rem'
    case 'md':
      return '0.5rem 1rem'
    case 'sm':
      return '0.281rem 0.75rem'
  }
}

export const getFontSize = props => `${props.theme.typography.textFontSizes[props.size === 'lg' ? 'sm' : 'xs']}px`

export const getCursor = props => props.disabled ? 'auto' : 'pointer'
