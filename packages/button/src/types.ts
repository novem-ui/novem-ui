import theme from '@novem-ui/theme'

export type ButtonHierarchy = 'loud' | 'quiet' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  hierarchy?: ButtonHierarchy
  size?: ButtonSize
  baseColor?: keyof Omit<Omit<typeof theme.colors, 'base'>, 'darkGrey'>
  disabled?: boolean
}
