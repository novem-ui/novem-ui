import { css } from '@emotion/react'
import { LayoutProps } from '../types'

const layout = ({ display, top, left, right, bottom, position }: LayoutProps) => {
  const style = css`
    ${display && `display: ${display};`}
    ${top && `top: ${top};`}
    ${left && `left: ${left};`}
    ${right && `right: ${right};`}
    ${bottom && `bottom: ${bottom};`}
    ${position && `position: ${position};`}
  `

  return style
}

export default layout
