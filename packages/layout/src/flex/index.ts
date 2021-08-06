import styled from '@emotion/styled'
import { flex, FlexProps as FlexboxProps } from '@novem-ui/base'

import { Box, BoxProps } from '../box'

export type FlexProps = Omit<BoxProps, 'display'> & FlexboxProps & { inline?: boolean }

export const Flex = styled(Box)<FlexProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  ${flex}
`
