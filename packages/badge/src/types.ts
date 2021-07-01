import theme from '@novem-ui/theme'
import { Hierarchy } from '@novem-ui/base'
import { Theme } from '@emotion/react'

export type BadgeHierarchy = Exclude<Hierarchy, 'link'>
export type BadgeSize = 'sm' | 'lg'

export interface BadgeProps {
  hierarchy?: BadgeHierarchy
  size?: BadgeSize
  baseColor?: keyof Omit<Omit<typeof theme.colors.palette, 'base'>, 'darkGrey'>
}

export type BadgeUtilsFunction = (props: BadgeProps & { theme?: Theme }) => string
