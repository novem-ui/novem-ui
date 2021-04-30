import colors from './colors'
import size from './sizes'
import spacing from './spacing'
import * as typography from './typography'

const theme = {
  colors,
  typography,
  size,
  spacing,
}

export type Theme = typeof theme

export default theme
