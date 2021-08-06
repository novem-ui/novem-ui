import '@emotion/react'
import { Theme as NovemTheme } from './packages/theme' 

declare module '@emotion/react' {
  export interface Theme extends NovemTheme {}
}