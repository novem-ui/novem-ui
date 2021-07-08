import styled from '@emotion/styled'
import { borderColor, BorderColorProps } from '@novem-ui/base'

const CheckboxElement = styled.span<BorderColorProps>`
  background-color: white;
  bottom: 0;
  cursor: pointer;
  left: 0;
  right: 0;
  box-sizing: border-box;
  top: 0;
  transition: all ease-in 0.15s;
  position: absolute;
  border-radius: ${({ theme }) => theme.spacing[2]}rem;
  border-width: 2px;
  border-style: solid;
  overflow: hidden;
  ${({ theme, baseColor }) => borderColor({ theme, baseColor })};
`

export default CheckboxElement
