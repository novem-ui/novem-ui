import styled from '@emotion/styled'
import SwitchElement from './switch-element'

const HiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SwitchElement}::after {
    transform: translate3d(12px, 0, 0);
  }
`

export default HiddenInput
