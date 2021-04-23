import React from 'react'
import { Global, css } from '@emotion/react'
import useTheme from '@novem-ui/theme/use-theme'

const BaseStyle = () => {
  const theme = useTheme()

  const style = css`
    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600&display=swap');
    * {
      font-family: ${theme.typography.fontFamily};
      color: ${theme.colors.darkGrey};
    }
  `
  return <Global styles={style} />
}

export default BaseStyle
