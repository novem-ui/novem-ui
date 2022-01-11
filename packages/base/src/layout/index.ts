import { css } from '@emotion/react'
import { Theme } from '@novem-ui/theme'
import { LayoutProps, SpacingPropValue } from '../types'

const layout = ({
  theme,
  display,
  top,
  left,
  right,
  bottom,
  position,
  maxWidth,
  maxHeight,
  height,
  width,
  zIndex
}: LayoutProps & { theme: Theme }) => {
  const getPropertyValue = (value: SpacingPropValue) => {
    const isString = typeof value === 'string'

    if (isString) {
      return value
    }

    const isNumber = typeof value === 'number'

    if (isNumber) {
      return `${theme.spacing[value]}rem`
    }

    throw new TypeError(`value argument expected a number or a value expressed in CSS units but got ${value} instead`)
  }

  const style = css`
    ${bottom && `bottom: ${getPropertyValue(bottom)};`}
    ${display && `display: ${display};`}
    ${height && `height: ${getPropertyValue(height)};`}
    ${left && `left: ${getPropertyValue(left)};`}
    ${position && `position: ${position};`}
    ${right && `right: ${getPropertyValue(right)};`}
    ${maxHeight && `max-height: ${getPropertyValue(maxHeight)};`}
    ${maxWidth && `max-width: ${getPropertyValue(maxWidth)};`}
    ${top && `top: ${getPropertyValue(top)};`}
    ${width && `width: ${getPropertyValue(width)};`}
    ${zIndex && `z-index: ${zIndex};`}
  `

  return style
}

export default layout
