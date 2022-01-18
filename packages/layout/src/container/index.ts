import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  border,
  background,
  layout,
  spacing,
  BorderProps,
  BackgroundProps,
  LayoutProps,
  SpacingProps,
  shadows,
  ShadowProps,
  flex,
  FlexProps
} from '@novem-ui/base'

export type ContainerProps = Omit<
  BorderProps & BackgroundProps & LayoutProps & SpacingProps & ShadowProps & FlexProps,
  'width'
> & {
  fluid?: boolean
}

const breakpoints = css`
  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  padding: ${({ theme }) => `${theme.spacing[4]}rem`};
  ${border}
  ${background}
  ${flex}
  ${layout}
  ${spacing}
  ${shadows}
  width: 100%;

  ${({ fluid }) => !fluid && breakpoints}
`
