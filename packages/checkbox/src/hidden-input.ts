import styled from '@emotion/styled'
import { solidColorWithHierarchy, SolidColorWithHierarchyProps } from '@novem-ui/base'
import CheckboxElement from './checkbox-element'

const HiddenInput = styled.input<Omit<SolidColorWithHierarchyProps, 'hierarchy'>>`
  opacity: 0;
  width: 0;
  height: 0;

  &:indeterminate + ${CheckboxElement}, &:checked + ${CheckboxElement} {
    ${({ theme, baseColor }) => solidColorWithHierarchy({ theme, baseColor, hierarchy: 'loud' })}
  }

  &:indeterminate ~ .checkbox-icon-minus {
    display: flex;
  }

  &:checked ~ .checkbox-icon-check {
    display: flex;
  }
`

export default HiddenInput
