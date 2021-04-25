const getBackgroundColor = ({ theme, hierarchy, baseColor, disabled }: Record<string, any>) => {
  const color = baseColor || theme.colors.base
  const colorGroup = theme.colors[color]
  const colorVariants = {
    loud: colorGroup['500'],
    quiet: colorGroup['100'],
    link: 'transparent',
  }
  const backgroundColor = disabled ? theme.colors.disabled.background[hierarchy] : colorVariants[hierarchy]

  return backgroundColor
}

export default getBackgroundColor
