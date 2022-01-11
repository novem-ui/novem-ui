import { Up } from '@icon-park/react'
import { getWeightedColorFromBase } from '@novem-ui/base'
import { Flex } from '@novem-ui/layout'
import { useComponentBaseColor, useTheme } from '@novem-ui/theme'
import React from 'react'

const Arrow = ({ isOpen, disabled, error }) => {
  const theme = useTheme()
  const baseColor = useComponentBaseColor()
  const color = getWeightedColorFromBase({ theme, baseColor, weight: '500' })

  const getArrowColor = ({ error, disabled }) => {
    if (disabled) {
      return theme.colors.palette.grey['500']
    }

    if (error) {
      return theme.colors.palette.red['500']
    }

    return color
  }

  return (
    <Flex
      align="center"
      position="absolute"
      right={4}
      height="100%"
      display="flex"
      justify="center"
      top="0"
      paddingTop={1}
      style={{
        // TODO: make an animation component and remove style prop
        transition: 'transform .25s ease',
        transform: isOpen ? '' : 'rotate(180deg)'
      }}
    >
      <Up theme="outline" size="24" fill={getArrowColor({ error, disabled })} />
    </Flex>
  )
}

export default Arrow
