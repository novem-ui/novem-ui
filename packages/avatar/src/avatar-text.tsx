import React, { VoidFunctionComponent } from 'react'

import { Flex } from '@novem-ui/layout'
import { Paragraph } from '@novem-ui/text'
import { getFontSizes } from './utils'
import { AvatarProps } from './types'

const AvatarText: VoidFunctionComponent<Omit<AvatarProps, 'image'>> = ({ size, name, description }) => {
  const fontSizes = getFontSizes(size)
  const textPadding = size === 'sm' ? 1 : 2
  const textJustification = name && !description ? 'center' : 'space-between'

  return (
    <Flex height="100%" py={textPadding} direction="column" justify={textJustification}>
      <Paragraph weight={800} size={fontSizes.nameSize}>
        {name}
      </Paragraph>
      {description && (
        <Paragraph color="grey.500" size={fontSizes.descriptionSize}>
          {description}
        </Paragraph>
      )}
    </Flex>
  )
}

export default AvatarText
