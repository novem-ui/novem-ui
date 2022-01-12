import { Up } from '@icon-park/react'
import { getWeightedColorFromBase } from '@novem-ui/base'
import { Flex } from '@novem-ui/layout'
import { useComponentBaseColor, useTheme } from '@novem-ui/theme'
import React, { VoidFunctionComponent } from 'react'

export interface ArrowProps {
  isOpen: boolean
  disabled?: boolean
  error?: boolean | string | Error
}

const Arrow: VoidFunctionComponent<ArrowProps> = ({ isOpen, disabled, error }) => {
  const theme = useTheme()
  const baseColor = useComponentBaseColor()
  const color = getWeightedColorFromBase({ theme, baseColor, weight: '500' })

  const getArrowColor = ({ error, disabled, isOpen }: ArrowProps) => {
    if (disabled) {
      return theme.colors.palette.grey['500']
    }

    if (!isOpen && error) {
      return theme.colors.palette.red['500']
    }

    return color
  }

  const fill = getArrowColor({ error, disabled, isOpen })

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
      <Up theme="outline" size="24" fill={fill} />
    </Flex>
  )
}

export default Arrow
