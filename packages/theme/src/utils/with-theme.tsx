import React from 'react'
import ThemeProvider from '../theme-provider'

import defaultTheme from '../theme'

const withTheme = (Component, theme = defaultTheme) => {
  const ComponentWithTheme = (props) => {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    )
  }

  return ComponentWithTheme
}

export default withTheme
