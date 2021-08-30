import { css } from '@emotion/react'
import { LayoutProps } from '../types'

const layout = ({ display, top, left, right, bottom, position, height, width }: LayoutProps) => {
  const style = css`
    ${bottom && `bottom: ${bottom};`}
    ${display && `display: ${display};`}
    ${height && `height: ${height};`}
    ${left && `left: ${left};`}
    ${position && `position: ${position};`}
    ${right && `right: ${right};`}
    ${top && `top: ${top};`}
    ${width && `width: ${width};`}
  `

  return style
}

export default layout
