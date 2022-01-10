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
  ShadowProps
} from '@novem-ui/base'

export type BoxProps = BorderProps & BackgroundProps & LayoutProps & SpacingProps & ShadowProps

export const Box = styled.div<BoxProps>`
  ${border}
  ${background}
  ${layout}
  ${spacing}
  ${shadows}
`
