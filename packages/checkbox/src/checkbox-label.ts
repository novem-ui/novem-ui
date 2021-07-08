import styled from '@emotion/styled'
import { spacing, SpacingProps } from '@novem-ui/base'

const CheckboxLabel = styled.label<SpacingProps>`
  ${spacing}
  position: relative;
  display: inline-block;
  width: ${({ theme }) => theme.spacing[5]}rem;
  height: ${({ theme }) => theme.spacing[5]}rem;
`

export default CheckboxLabel
