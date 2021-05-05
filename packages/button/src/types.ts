import { Hierarchy } from '@novem-ui/base'
import theme from '@novem-ui/theme'

export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  hierarchy?: Hierarchy
  size?: ButtonSize
  baseColor?: keyof Omit<Omit<typeof theme.colors, 'base'>, 'darkGrey'>
  disabled?: boolean
}
