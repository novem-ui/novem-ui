export const getPadding = ({ size }) => {
  switch (size) {
    case 'lg':
      return '0.875rem 1.5rem'
    case 'md':
      return '0.5rem 1rem'
    case 'sm':
      return '0.281rem 0.75rem'
  }
}

export const getFontSize = ({ theme, size }) => `${theme.typography.textFontSizes[size === 'lg' ? 'sm' : 'xs']}px`

export const getCursor = ({ disabled }) => !disabled && 'pointer'
