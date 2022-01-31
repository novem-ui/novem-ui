import styled from '@emotion/styled'
import { css } from '@emotion/react'
import theme, { BaseColor, Theme } from '@novem-ui/theme'

export interface TooltipBubbleProps {
  variant?: 'color-scheme' | 'theme'
  position?: 'left' | 'center' | 'right'
  baseColor?: BaseColor
}

const getBubbleOffset = (position: TooltipBubbleProps['position']) => {
  const offsets = {
    right: 'calc(-100% + 1.9rem)',
    center: 'calc(-50% + 1rem)',
    left: '-1rem'
  }

  return offsets[position]
}

const getArrowPosition = ({ position }: TooltipBubbleProps) => {
  const pos = {
    right: 'right: 1rem;',
    center: 'right: 50%;',
    left: 'left: 1rem;'
  }

  return pos[position]
}

const getBubbleColors = (props: TooltipBubbleProps & { theme: Theme }) => {
  const baseColor = props.baseColor || theme.colors.base
  const backgroundColor = props.variant === 'color-scheme' ? 'white' : theme.colors.palette[baseColor][500]
  const textColor = props.variant === 'color-scheme' ? 'black' : 'white'

  const backgroundColorCss = css`
    background-color: ${backgroundColor};
  `

  return css`
    ${backgroundColorCss}
    * {
      color: ${textColor}!important;
    }

    &::after {
      ${backgroundColorCss}
    }
  `
}

const TooltipBubble = styled.div<TooltipBubbleProps>`
  border-radius: ${({ theme }) => `${theme.spacing[4]}rem`};
  filter: drop-shadow(0 1px 3px rgb(0 0 0 / 0.1));
  padding: ${({ theme }) => `${theme.spacing[4]}rem`};
  top: -100%;
  position: absolute;
  width: ${({ theme }) => `${theme.spacing[44]}rem`};

  ${({ position }) => `transform: translate(${getBubbleOffset(position)}, calc(-90%));`}

  &::after {
    bottom: ${({ theme }) => `-${theme.spacing[2]}rem`};
    content: ' ';
    height: ${({ theme }) => `${theme.spacing[4]}rem`};
    position: absolute;
    transform: rotate(45deg) translateY(-2px);
    width: ${({ theme }) => `${theme.spacing[4]}rem`};

    ${getArrowPosition}
  }

  ${getBubbleColors}
`
export default TooltipBubble
