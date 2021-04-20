// custom implementation of the useTheme hook due to the one
// from emotion not working at our BaseStyle

import { useContext } from 'react'
import NovemThemeContext from './theme-context'

const useTheme = () => {
  const theme = useContext(NovemThemeContext)

  return theme
}

export default useTheme
