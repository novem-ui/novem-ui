import * as React from 'react'
import IBadge from './types'

import BadgeContainer from './styles'

const Badge: React.FunctionComponent<IBadge> = ({ variant, children }) => (
  <BadgeContainer>
    <div className={variant}>
      {children}
    </div>
  </BadgeContainer>
);

export default Badge
