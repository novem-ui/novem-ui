/* eslint-disable eqeqeq */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { getWeightedColorFromBase } from '@novem-ui/base'
import { Paragraph } from '@novem-ui/text'
import { BaseColor, useComponentBaseColor } from '@novem-ui/theme'
import { nanoid } from 'nanoid'
import React, { useEffect, useRef } from 'react'
import { useDropdownState } from './context'

export interface OptionProps {
  value: string | number
  children: JSX.Element
}

const OptionStyle = styled.li<{ baseColor?: BaseColor; selected?: Boolean }>`
  height: ${({ theme }) => theme.spacing[12]}rem;
  padding: ${({ theme }) => `${theme.spacing[2]}rem ${theme.spacing[4]}rem`};
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    background-color: ${({ theme, baseColor }) => getWeightedColorFromBase({ theme, baseColor, weight: '50' })};
  }

  ${({ selected, theme, baseColor }) =>
    selected &&
    css`
      &:after {
        position: absolute;
        content: '';
        background-color: ${getWeightedColorFromBase({ theme, baseColor, weight: '500' })};
        border-radius: 100%;
        height: ${theme.spacing[1]}rem;
        width: ${theme.spacing[1]}rem;
        left: ${theme.spacing[2]}rem;
        transform: translateX(-25%);
      }
    `}
`

export const Option = ({ children, value }) => {
  const [{ selected }, { selectOption, addOption, removeOption }] = useDropdownState()
  const baseColor = useComponentBaseColor()
  const componentId = useRef(nanoid())

  const isSelected = selected?.value == value

  useEffect(() => {
    addOption({ id: componentId.current, value, children })

    return () => {
      removeOption(componentId.current)
    }
  }, [])

  const interactionHandler = () => selectOption({ id: componentId.current, value, children })

  return (
    <OptionStyle onClick={interactionHandler} role="option" selected={isSelected} baseColor={baseColor}>
      <Paragraph ml={0}>{children}</Paragraph>
    </OptionStyle>
  )
}
