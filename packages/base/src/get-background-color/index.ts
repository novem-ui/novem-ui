import { SolidColorWithHierarchyProps } from '../solid-color-with-hierarchy'

const getBackgroundColor = ({ theme, hierarchy, baseColor }: SolidColorWithHierarchyProps) => {
  const color = baseColor || theme.colors.base
  const colorGroup = theme.colors.palette[color]
  const colorVariants = {
    loud: colorGroup['500'],
    quiet: colorGroup['100'],
    link: 'transparent'
  }
  const backgroundColor = colorVariants[hierarchy]

  return backgroundColor
}

export default getBackgroundColor
