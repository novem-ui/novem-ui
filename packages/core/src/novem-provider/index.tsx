import React, { FunctionComponent } from 'react'
import ThemeProvider from '@novem-ui/theme/theme-provider'
import defaultTheme from '../../../theme'

import CSSReset from '../css-reset'

import BaseStyle from '../base-style'

import { NovemProviderProps } from './types'

const NovemProvider: FunctionComponent<NovemProviderProps> = ({ children, theme = defaultTheme, reset, baseColor }) => (
  <ThemeProvider theme={{ ...theme, colors: { ...theme.colors, base: baseColor || theme.colors.base } }}>
    <BaseStyle />
    {reset && <CSSReset />}
    {children}
  </ThemeProvider>
)

export default NovemProvider
