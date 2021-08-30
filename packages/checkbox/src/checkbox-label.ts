import styled from '@emotion/styled'
import { spacing, SpacingProps } from '@novem-ui/base'

const CheckboxLabel = styled.label<SpacingProps>`
  ${spacing}
  position: relative;
  display: inline-flex;
  width: ${({ theme }) => theme.spacing[5]}rem;
  height: ${({ theme }) => theme.spacing[5]}rem;
  justify-content: center;
  align-items: center;

  .i-icon {
    position: absolute;
    display: none;
  }
`

export default CheckboxLabel
