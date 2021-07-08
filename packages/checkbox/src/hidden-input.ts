import styled from '@emotion/styled'
import { solidColorWithHierarchy, SolidColorWithHierarchyProps, getIcon } from '@novem-ui/base'
import CheckboxElement from './checkbox-element'

const HiddenInput = styled.input<Omit<SolidColorWithHierarchyProps, 'hierarchy'>>`
  opacity: 0;
  width: 0;
  height: 0;

  &:indeterminate + ${CheckboxElement}, &:checked + ${CheckboxElement} {
    ${({ theme, baseColor }) => solidColorWithHierarchy({ theme, baseColor, hierarchy: 'loud' })}

    &::after {
      content: '';
      display: block;
    }
  }

  &:indeterminate + ${CheckboxElement} {
    &::after {
      background-color: white;
      border-radius: ${({ theme }) => theme.spacing[0.5]}rem;
      height: ${({ theme }) => theme.spacing[0.5]}rem;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      position: absolute;
      width: ${({ theme }) => theme.spacing[2]}rem;
    }
  }

  &:checked + ${CheckboxElement} {
    &::after {
      background-image: url(${getIcon({ valid: true })});
      height: ${({ theme }) => theme.spacing[4]}rem;
      width: ${({ theme }) => theme.spacing[4]}rem;
    }
  }
`

export default HiddenInput
