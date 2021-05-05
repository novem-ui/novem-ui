const getColor = ({ theme, hierarchy, baseColor, disabled }: any) => {
  const color = baseColor || theme.colors.base
  const colorGroup = theme.colors[color]
  const disabledColor = theme.colors.disabled.fontColor

  if (disabled) {
    return disabledColor
  }

  if (hierarchy === 'loud') {
    return '#fff'
  }

  return colorGroup['500']
}

export default getColor
