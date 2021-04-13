import * as React from 'react'
import IBadge from './types'

import BadgeContainer from './styles'

const Badge: React.FunctionComponent<IBadge> = ({ variant, children }) => (
  <BadgeContainer>
    {children}
  </BadgeContainer>
);

export default Badge
