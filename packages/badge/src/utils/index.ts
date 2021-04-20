export const getPadding = ({ theme, size }) => {
  const isLarge = size === 'lg'
  const xPaddingSize = theme.size[isLarge ? 2 : 1]
  const yPaddingSize = isLarge ? theme.size[2] * 3 : theme.size[3]

  return `${xPaddingSize}rem ${yPaddingSize}rem`
}

export const getFontSize = ({ theme, size }) => `${theme.typography.textFontSizes[size === 'lg' ? 'sm' : 'xs']}px`
