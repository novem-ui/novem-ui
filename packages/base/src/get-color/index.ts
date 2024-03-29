import { SolidColorWithHierarchyProps } from '../solid-color-with-hierarchy'

const getColor = ({ theme, hierarchy, baseColor, disabled }: SolidColorWithHierarchyProps & { disabled?: boolean }) => {
  const color = baseColor || theme.colors.base
  const colorGroup = theme.colors.palette[color]
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
