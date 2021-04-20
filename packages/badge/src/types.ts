import theme from '@novem-ui/theme'

export type BadgeHierarchy = 'loud' | 'quiet'
export type BadgeSize = 'sm' | 'lg'

export interface BadgeProps {
  hierarchy: BadgeHierarchy
  size: BadgeSize
  baseColor: keyof Omit<Omit<typeof theme.colors, 'base'>, 'darkGrey'>
}
