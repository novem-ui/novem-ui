import styled from '@emotion/styled'
import {
  border,
  background,
  layout,
  spacing,
  BorderProps,
  BackgroundProps,
  LayoutProps,
  SpacingProps
} from '@novem-ui/base'

export type BoxProps = BorderProps & BackgroundProps & LayoutProps & SpacingProps

export const Box = styled.div<BoxProps>`
  ${border}
  ${background}
  ${layout}
  ${spacing}
`
