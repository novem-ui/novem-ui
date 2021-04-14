import * as React from 'react'
import { Global } from '@emotion/react'

import IBadge from './types'

import BadgeContainer from './styles'
import GlobalStyles from "../../utils/globalStyles"

const Badge: React.FunctionComponent<IBadge> = ({ variant, children }) => (
  <>
    <Global styles={GlobalStyles}/>
    <BadgeContainer className={variant}>
      {children}
    </BadgeContainer>
  </>
);

export default Badge
