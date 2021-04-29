import '@emotion/react'
import { Theme as NovemTheme } from '@novem-ui/theme' 

declare module '@emotion/react' {
  export interface Theme extends NovemTheme {}
}