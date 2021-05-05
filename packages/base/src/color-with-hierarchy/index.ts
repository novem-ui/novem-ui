import { css } from '@emotion/react'
import { Theme, BaseColor } from '@novem-ui/theme'
import { Hierarchy } from '../types'

export interface ColorWithHierarchyProps {
  theme: Theme
  hierarchy?: Hierarchy
  baseColor?: BaseColor
}

const colorWithHierarchy = ({ theme: { colors }, hierarchy, baseColor }: ColorWithHierarchyProps) => {
  const colorScheme: BaseColor = baseColor || colors.base

  const backgroundColor: Record<Hierarchy, string> = {
    link: 'rgba(0,0,0,0)',
    loud: colors.palette[colorScheme][500],
    quiet: colors.palette[colorScheme][100],
  }
  const color: Record<Hierarchy, string> = {
    link: colors.palette[colorScheme][500],
    loud: 'rgba(255,255,255,1)',
    quiet: colors.palette[colorScheme][500],
  }

  const style = css`
    background-color: ${backgroundColor[hierarchy]};
    color: ${color[hierarchy]};
  `
  return style
}

export default colorWithHierarchy
