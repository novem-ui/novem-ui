import { css } from '@emotion/react'
import { InputElementProps } from '../types'

import getBaseColor from '../utils/get-base-color'

function inputElement({ theme, baseColor, error, valid, disabled }: InputElementProps) {
  const { green, red, grey } = theme.colors.palette
  const feedbackBorder = `
    ${error && `border-color: ${red[500]};`};
    ${valid && `border-color: ${green[500]};`};
  `
  const feedbackShadow = `
    ${error && `box-shadow: 0 2px 4px 0 ${red[100]}`};
    ${valid && `box-shadow: 0 2px 4px 0 ${green[100]}`};
  `
  const style = css`
    border: 1px solid ${theme.colors.gray25};
    border-radius: ${theme.spacing['4']}rem;
    ${!disabled && feedbackBorder};
    box-sizing: border-box;
    height: ${theme.spacing['12']}rem;
    font-size: ${theme.typography.textFontSizes.md}px;
    padding: ${theme.spacing['4']}rem;
    transition: border ease-in 0.25s;

    &:focus,
    &:hover {
      outline: unset;
      border-color: ${getBaseColor('500')({ theme, baseColor })};
      ${feedbackBorder}
      box-shadow: 0 2px 4px 0 ${getBaseColor('100')({ theme, baseColor })};
      ${feedbackShadow}
    }

    &:disabled {
      pointer-events: none;
      background-color: ${grey[100]};
    }

    &:read-only {
      background-color: white;
      border-color: white;
      margin-left: -2px;
      padding: ${theme.spacing[2]}rem;
      pointer-events: none;
    }
  `

  return style
}

export default inputElement
