import styled from '@emotion/styled'
import { inputElement } from '@novem-ui/base'

export interface ExtendedInputProps {
  error?: boolean | string | Error
  valid?: boolean
}

const Input = styled.input<ExtendedInputProps>`
  position: relative;
  ${inputElement}
`

export default Input
