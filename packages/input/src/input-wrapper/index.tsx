import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Theme } from '@novem-ui/theme'

import getIcon from './get-icon'

export interface InputWrapperInterface {
  disabled?: boolean
  valid?: boolean
  error?: string | boolean | Error
}

const status = ({ valid, error, theme }: InputWrapperInterface & { theme?: Theme }) => css`
  &::before,
  &::after {
    content: '';
    display: block;
    top: 50%;
    position: absolute;
    right: ${theme.spacing[4]}rem;
  }

  &::before {
    background-image: url(${getIcon({ valid, error })});
    height: ${theme.spacing['4']}rem;
    transform: translate(-14%, -50%);
    width: ${theme.spacing['4']}rem;
    z-index: 1;
  }

  &::after {
    background-color: ${theme.colors.palette[valid ? 'green' : 'red'][500]};
    border-radius: ${theme.spacing['2.5']}rem;
    height: ${theme.spacing['5']}rem;
    transform: translateY(-50%);
    width: ${theme.spacing['5']}rem;
  }
`

const InputWrapper = styled.div<InputWrapperInterface>`
  display: flex;
  flex-direction: column;
  position: relative;

  ${({ valid, error, theme, disabled }) => (!disabled && (valid || error) ? status({ valid, error, theme }) : null)}
`
export default InputWrapper
