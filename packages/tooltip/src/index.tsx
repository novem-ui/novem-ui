/* eslint-disable indent */
import React, { FunctionComponent, ReactChild, useState } from 'react'

import { Box } from '@novem-ui/layout'
import { SpacingProps } from '@novem-ui/base'
import { Paragraph } from '@novem-ui/text'
import TooltipBubble, { TooltipBubbleProps } from './tooltip-bubble'

export interface TooltipProps extends TooltipBubbleProps {
  title?: string
  message?: ReactChild
  // clickable?: boolean
}

const Tooltip: FunctionComponent<TooltipProps & SpacingProps> = ({
  children,
  title,
  message,
  variant,
  position = 'center',
  baseColor,
  ...props
}) => {
  const [isOver, setIsOver] = useState(false)
  const handleOnMouseOver = () => setIsOver(true)
  const handleOnMouseOut = () => setIsOver(false)

  return (
    <Box
      {...props}
      display="inline-block"
      position="relative"
      data-novem="tooltip-trigger"
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
      style={{ textDecoration: 'underline' }}
    >
      {children}
      {isOver && (
        <Box
          position="absolute"
          width={4}
          height={1}
          left="50%"
          top="-1.25rem"
          backgroundColor="red.400"
          style={{
            transform: 'translateX(-50%)'
          }}
        >
          <TooltipBubble position={position} variant={variant} baseColor={baseColor}>
            {title && <Paragraph weight="bold">{title}</Paragraph>}
            {message && <Paragraph>{message}</Paragraph>}
          </TooltipBubble>
        </Box>
      )}
    </Box>
  )
}

export default Tooltip
