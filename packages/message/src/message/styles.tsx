import styled from '@emotion/styled'

import { BaseColorTypes } from './types'

export interface WrapperTypes {
  baseColor: BaseColorTypes
}

export interface TextTypes {
  withTitle?: boolean
}

export const Wrapper = styled.div<WrapperTypes>`
  padding: 1rem;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.palette.orange[500]};
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
`

export const Actions = styled.div`
  display: flex;
`

export const Text = styled.p<TextTypes>`
  margin: 0;
  font-size: ${(props) =>
    props.withTitle ? props.theme.typography.textFontSizes.xs : props.theme.typography.textFontSizes.sm}px;
`

export const Title = styled.p`
  font-size: ${(props) => props.theme.typography.textFontSizes.sm}px;
  font-weight: bold;
  margin: 0;
`

export const Icon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-color: #f6c6ce;
  border-radius: 1.24rem;
`

export const ContentWrapper = styled.div`
  margin: 0 0 0 1rem;
  display: grid;
  gap: 0.25rem;
`

export const Close = styled.div`
  cursor: pointer;
  margin-left: 1rem;
`
