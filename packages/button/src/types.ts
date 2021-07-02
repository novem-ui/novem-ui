import { Hierarchy, SpacingProps } from '@novem-ui/base'
import theme from '@novem-ui/theme'

export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends SpacingProps{
  hierarchy?: Hierarchy
  size?: ButtonSize
  baseColor?: keyof typeof theme.colors.palette
  disabled?: boolean
}
