import theme, { Theme } from '@novem-ui/theme'

export interface NovemProviderProps {
  theme?: Theme
  reset?: boolean
  baseColor?: keyof typeof theme.colors.palette
}
