import styled from '@emotion/styled'
import { inputElement } from '@novem-ui/base'

import type { BaseColor } from '@novem-ui/theme'

export interface ExtendedInputProps {
  error?: boolean | string | Error
  valid?: boolean
  baseColor?: BaseColor
}

/**
 * Styled input element
 *  #### Usage:
    ```tsx
    <Input {...props} />
    ```
 *  
 */
const Input = styled.input<ExtendedInputProps>`
  position: relative;
  flex: 1;
  ${inputElement}
`

export default Input
