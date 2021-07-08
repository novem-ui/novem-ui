import styled from '@emotion/styled'
import { solidColorWithHierarchy, SolidColorWithHierarchyProps, getIcon } from '@novem-ui/base'
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
      background-image: url(${getIcon({ valid: true })});
      height: ${({ theme }) => theme.spacing[4]}rem;
      width: ${({ theme }) => theme.spacing[4]}rem;
    }
  }
`

export default HiddenInput
