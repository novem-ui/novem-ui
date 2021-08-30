// wrapping the emotion ThemeProvider is a workaround for the
// emotion useTheme hook not working in our project

import React, { FunctionComponent } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { Theme } from './theme'
import NovemThemeContext from './theme-context'

const ThemeProvider: FunctionComponent<{ theme: Theme }> = ({ theme, children }) => {
  return (
    <NovemThemeContext.Provider value={theme}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </NovemThemeContext.Provider>
  )
}

export default ThemeProvider
