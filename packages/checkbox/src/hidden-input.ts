import styled from '@emotion/styled'
import { solidColorWithHierarchy, SolidColorWithHierarchyProps } from '@novem-ui/base'
import CheckboxElement from './checkbox-element'

const HiddenInput = styled.input<Omit<SolidColorWithHierarchyProps, 'hierarchy'>>`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${CheckboxElement} {
    ${({ theme, baseColor }) => solidColorWithHierarchy({ theme, baseColor, hierarchy: 'loud' })}

    &::after {
      content: '';
      display: block;
    }
  }
`

export default HiddenInput
