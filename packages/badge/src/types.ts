import theme from '@novem-ui/theme'
import { Hierarchy } from '@novem-ui/base'

export type BadgeHierarchy = Exclude<Hierarchy, 'link'>
export type BadgeSize = 'sm' | 'lg'

export interface BadgeProps {
  hierarchy?: BadgeHierarchy
  size?: BadgeSize
  baseColor?: keyof Omit<Omit<typeof theme.colors.palette, 'base'>, 'darkGrey'>
}
