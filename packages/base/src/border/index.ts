import { css } from '@emotion/react'
import { Theme } from '@novem-ui/theme'

import { BorderProps } from '../types'
import getColorFactory from '../utils/get-color'

const border = ({
  border,
  borderBlock,
  borderBlockColor,
  borderBlockEnd,
  borderBlockEndColor,
  borderBlockEndStyle,
  borderBlockEndWidth,
  borderBlockStart,
  borderBlockStartColor,
  borderBlockStartStyle,
  borderBlockStartWidth,
  borderBlockStyle,
  borderBlockWidth,
  borderBottom,
  borderBottomColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderBottomStyle,
  borderBottomWidth,
  borderCollapse,
  borderColor,
  borderEndEndRadius,
  borderEndStartRadius,
  borderInline,
  borderInlineColor,
  borderInlineEnd,
  borderInlineEndColor,
  borderInlineEndStyle,
  borderInlineEndWidth,
  borderInlineStart,
  borderInlineStartColor,
  borderInlineStartStyle,
  borderInlineStartWidth,
  borderInlineStyle,
  borderInlineWidth,
  borderLeft,
  borderLeftColor,
  borderLeftStyle,
  borderLeftWidth,
  borderRadius,
  borderRight,
  borderRightColor,
  borderRightStyle,
  borderRightWidth,
  borderSpacing,
  borderStartEndRadius,
  borderStartStartRadius,
  borderStyle,
  borderTop,
  borderTopColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderTopStyle,
  borderTopWidth,
  borderWidth,
  theme
}: BorderProps & { theme: Theme }) => {
  const getColor = getColorFactory(theme)
  
  return css`
    ${border && `border: ${border};`}
    ${borderBlock && `border-block: ${borderBlock};`}
    ${borderBlockColor && `border-block-color: ${getColor(borderBlockColor)};`}
    ${borderBlockEnd && `border-block-end: ${borderBlockEnd};`}
    ${borderBlockEndColor && `border-block-end-color: ${getColor(borderBlockEndColor)};`}
    ${borderBlockEndStyle && `border-block-end-style: ${borderBlockEndStyle};`}
    ${borderBlockEndWidth && `border-block-end-width: ${borderBlockEndWidth};`}
    ${borderBlockStart && `border-block-start: ${borderBlockStart};`}
    ${borderBlockStartColor && `border-block-start-color: ${getColor(borderBlockStartColor)};`}
    ${borderBlockStartStyle && `border-block-start-style: ${borderBlockStartStyle};`}
    ${borderBlockStartWidth && `border-block-start-width: ${borderBlockStartWidth};`}
    ${borderBlockStyle && `border-block-style: ${borderBlockStyle};`}
    ${borderBlockWidth && `border-block-width: ${borderBlockWidth};`}
    ${borderBottom && `border-bottom: ${borderBottom};`}
    ${borderBottomColor && `border-bottom-color: ${getColor(borderBottomColor)};`}
    ${borderBottomLeftRadius && `border-bottom-left-radius: ${borderBottomLeftRadius};`}
    ${borderBottomRightRadius && `border-bottom-right-radius: ${borderBottomRightRadius};`}
    ${borderBottomStyle && `border-bottom-style: ${borderBottomStyle};`}
    ${borderBottomWidth && `border-bottom-width: ${borderBottomWidth};`}
    ${borderCollapse && `border-collapse: ${borderCollapse};`}
    ${borderColor && `border-color: ${getColor(borderColor)};`}
    ${borderEndEndRadius && `border-end-end-radius: ${borderEndEndRadius};`}
    ${borderEndStartRadius && `border-end-start-radius: ${borderEndStartRadius};`}
    ${borderInline && `border-inline: ${borderInline};`}
    ${borderInlineColor && `border-inline-color: ${getColor(borderInlineColor)};`}
    ${borderInlineEnd && `border-inline-end: ${borderInlineEnd};`}
    ${borderInlineEndColor && `border-inline-end-color: ${getColor(borderInlineEndColor)};`}
    ${borderInlineEndStyle && `border-inline-end-style: ${borderInlineEndStyle};`}
    ${borderInlineEndWidth && `border-inline-end-width: ${borderInlineEndWidth};`}
    ${borderInlineStart && `border-inline-start: ${borderInlineStart};`}
    ${borderInlineStartColor && `border-inline-start-color: ${getColor(borderInlineStartColor)};`}
    ${borderInlineStartStyle && `border-inline-start-style: ${borderInlineStartStyle};`}
    ${borderInlineStartWidth && `border-inline-start-width: ${borderInlineStartWidth};`}
    ${borderInlineStyle && `border-inline-style: ${borderInlineStyle};`}
    ${borderInlineWidth && `border-inline-width: ${borderInlineWidth};`}
    ${borderLeft && `border-left: ${borderLeft};`}
    ${borderLeftColor && `border-left-color: ${getColor(borderLeftColor)};`}
    ${borderLeftStyle && `border-left-style: ${borderLeftStyle};`}
    ${borderLeftWidth && `border-left-width: ${borderLeftWidth};`}
    ${borderRadius && `border-radius: ${borderRadius};`}
    ${borderRight && `border-right: ${borderRight};`}
    ${borderRightColor && `border-right-color: ${getColor(borderRightColor)};`}
    ${borderRightStyle && `border-right-style: ${borderRightStyle};`}
    ${borderRightWidth && `border-right-width: ${borderRightWidth};`}
    ${borderSpacing && `border-spacing: ${borderSpacing};`}
    ${borderStartEndRadius && `border-start-end-radius: ${borderStartEndRadius};`}
    ${borderStartStartRadius && `border-start-start-radius: ${borderStartStartRadius};`}
    ${borderStyle && `border-style: ${borderStyle};`}
    ${borderTop && `border-top: ${borderTop};`}
    ${borderTopColor && `border-top-color: ${getColor(borderTopColor)};`}
    ${borderTopLeftRadius && `border-top-left-radius: ${borderTopLeftRadius};`}
    ${borderTopRightRadius && `border-top-right-radius: ${borderTopRightRadius};`}
    ${borderTopStyle && `border-top-style: ${borderTopStyle};`}
    ${borderTopWidth && `border-top-width: ${borderTopWidth};`}
    ${borderWidth && `border-width: ${borderWidth};`}
  `
}

export default border
