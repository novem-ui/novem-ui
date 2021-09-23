import styled from '@emotion/styled'
import { borderColor, BorderColorProps } from '@novem-ui/base'
import type { Theme } from '@novem-ui/theme'

export interface TextTypes {
  withTitle?: boolean
}

export interface IconWrapperTypes {
  baseColor: keyof Theme['colors']['palette']
}

export const MessageWrapper = styled.div<BorderColorProps>`
  align-items: center;
  border-radius: ${({ theme }) => `${theme.spacing[4]}rem`};
  border-style: solid;
  border-width: 1px;
  box-shadow: ${({ theme }) => `0 ${theme.spacing[0.5]}rem ${theme.spacing[1.5]}rem rgba(31, 26, 24, 0.12)`};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing[4]}rem`};
  height: ${({ theme }) => `${theme.spacing[18]}rem`};
  ${({ theme, baseColor }) => borderColor({ theme, baseColor })};
`
