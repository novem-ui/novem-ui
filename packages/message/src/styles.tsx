import styled from '@emotion/styled'
import { borderColor, BorderColorProps } from '@novem-ui/base'
import theme from '@novem-ui/theme'

export interface TextTypes {
  withTitle?: boolean
}

export interface IconWrapperTypes {
  baseColor: keyof typeof theme.colors.palette
}

export const MessageWrapper = styled.div<BorderColorProps>`
  align-items: center;
  border-radius: 1rem;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 0.125rem 0.375rem rgba(31, 26, 24, 0.12);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
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
  margin-top: 1.125rem;
`

export const ContentWrapper = styled.div`
  display: grid;
  gap: 0.25rem;
  margin: 0 0 0 1rem;
`

export const CloseWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 0.75rem;
  margin-left: 1rem;
  width: 0.75rem;

  svg {
    height: 0.75rem;
    width: 0.75rem;
  }
`
