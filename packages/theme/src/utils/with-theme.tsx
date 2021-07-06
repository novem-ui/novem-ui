import React, { ComponentType } from 'react'
import ThemeProvider from '../theme-provider'

import defaultTheme from '../theme'

function withTheme<T = any>(Component: ComponentType<T>, theme = defaultTheme) {
  const ComponentWithTheme = (props: T) => {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    )
  }

  return ComponentWithTheme
}

export default withTheme
