const getColor = ({ theme, hierarchy, baseColor }: any) => {
  const color = baseColor || theme.colors.base
  const colorGroup = theme.colors.palette[color]

  if (hierarchy === 'loud') {
    return '#fff'
  }

  return colorGroup['500']
}

export default getColor
