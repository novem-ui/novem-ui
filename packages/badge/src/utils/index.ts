export const getPadding = ({ theme, size }) => {
  const isLarge = size === 'lg'
  const xPaddingSize = theme.spacing[isLarge ? 1 : 0.5]
  const yPaddingSize = isLarge ? theme.spacing[3] : theme.spacing[2]

  return `${xPaddingSize}rem ${yPaddingSize}rem`
}

export const getFontSize = ({ theme, size }) => `${theme.typography.textFontSizes[size === 'lg' ? 'sm' : 'xs']}px`
