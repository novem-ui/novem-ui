import styled from '@emotion/styled'
import { solidColorWithHierarchy, SolidColorWithHierarchyProps } from '@novem-ui/base'

import SwitchElement from './switch-element'

const HiddenInput = styled.input<Omit<SolidColorWithHierarchyProps, 'hierarchy'>>`
  opacity: 0;
  width: 0;
  height: 0;

  &:disabled + ${SwitchElement} {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:checked + ${SwitchElement} {
    ${({ theme, baseColor }) => solidColorWithHierarchy({ theme, baseColor, hierarchy: 'loud' })}

    &::after {
      transform: translate3d(12px, 0, 0);
    }
  }
`

export default HiddenInput
