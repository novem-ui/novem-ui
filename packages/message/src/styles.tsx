import styled from '@emotion/styled'
import { borderColor, BorderColorProps } from '@novem-ui/base'
import { Flex } from '@novem-ui/layout'
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
  box-shadow: 0 0.125rem 0.375rem rgba(31, 26, 24, 0.12);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing[4]}rem`};
  height: 4.5rem;
  ${({ theme, baseColor }) => borderColor({ theme, baseColor })};
`

export const Content = styled.div`
  align-items: center;
  display: flex;
`

export const Actions = styled.div`
  align-items: center;
  display: flex;
`

export const Text = styled.p<TextTypes>`
  font-size: ${(props) =>
    props.withTitle ? props.theme.typography.textFontSizes.xs : props.theme.typography.textFontSizes.sm}px;
  margin: 0;
`

export const Title = styled.p`
  font-size: ${(props) => props.theme.typography.textFontSizes.sm}px;
  font-weight: bold;
  margin: 0;
`

export const IconWrapper = styled.div`
  margin-top: ${({ theme }) => `${theme.spacing[4.5]}rem`};
`

export const CloseWrapper = styled(Flex)`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: ${({ theme }) => `${theme.spacing[3]}rem`};
  margin-left: ${({ theme }) => `${theme.spacing[4]}rem`};
  width: ${({ theme }) => `${theme.spacing[3]}rem`};

  svg {
    height: ${({ theme }) => `${theme.spacing[3]}rem`};
    width: ${({ theme }) => `${theme.spacing[3]}rem`};
  }
`
