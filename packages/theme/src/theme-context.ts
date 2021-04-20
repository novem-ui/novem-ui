// custom implementation of ThemeContext hook due to useTheme
// from emotion not working at our BaseStyle

import React from 'react'

import theme from './theme'
import { Theme } from '../types'

const NovemThemeContext = React.createContext<Theme>(theme)

export default NovemThemeContext
