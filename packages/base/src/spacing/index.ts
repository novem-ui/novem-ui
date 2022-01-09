import { css } from '@emotion/react'
import { Theme } from '@novem-ui/theme'

import SpacingUtils from '../utils/spacing-utils'
import { CSSSpacingProps, SpacingPropValue } from '../types'

const spacing = ({ theme, ...spacingProps }: { theme?: Theme } & CSSSpacingProps) => {
  const {
    margin,
    marginX,
    marginY,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    padding,
    paddingX,
    paddingY,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop
  } = SpacingUtils.validateProps(spacingProps)
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
    ${margin && `margin: ${getPropertyValue(margin)};`}
    ${marginX && `margin-left: ${getPropertyValue(marginX)};\nmargin-right:${getPropertyValue(marginX)};`}
    ${marginY && `margin-top: ${getPropertyValue(marginY)};\nmargin-bottom:${getPropertyValue(marginY)};`}
    ${marginLeft && `margin-left: ${getPropertyValue(marginLeft)};`}
    ${marginRight && `margin-right: ${getPropertyValue(marginRight)};`}
    ${marginTop && `margin-top: ${getPropertyValue(marginTop)};`}
    ${marginBottom && `margin-bottom: ${getPropertyValue(marginBottom)};`}

    ${padding && `padding: ${getPropertyValue(padding)}`}
    ${paddingX && `padding-left: ${getPropertyValue(paddingX)};\npadding-right:${getPropertyValue(paddingX)};`}
    ${paddingY && `padding-top: ${getPropertyValue(paddingY)};\npadding-bottom:${getPropertyValue(paddingY)};`}
    ${paddingLeft && `padding-left: ${getPropertyValue(paddingLeft)};`}
    ${paddingRight && `padding-right: ${getPropertyValue(paddingRight)};`}
    ${paddingTop && `padding-top: ${getPropertyValue(paddingTop)};`}
    ${paddingBottom && `padding-bottom: ${getPropertyValue(paddingBottom)};`}
  `

  return style
}

export default spacing
