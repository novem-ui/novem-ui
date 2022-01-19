import React, { VoidFunctionComponent } from 'react'
import styled from '@emotion/styled'

import { Flex } from '@novem-ui/layout'
import { Paragraph } from '@novem-ui/text'

import { SpacingValue } from '@novem-ui/theme'
import { getInitials } from './utils'
import { AvatarProps } from './types'

const StyledImage = styled.img`
  height: 100%;
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
  width: 100%;
`

const AvatarImage: VoidFunctionComponent<Omit<AvatarProps, 'description' | 'size'> & { avatarSize: SpacingValue }> = ({
  name,
  image,
  avatarSize
}) => {
  const avatarAlt = `${name}'s avatar image`

  return (
    <Flex
      justify="center"
      align="center"
      height={avatarSize}
      width={avatarSize}
      borderRadius="2rem"
      position="relative"
      style={{ overflow: 'hidden' }}
      mr={4}
      backgroundColor="theme"
    >
      {image ? (
        <StyledImage src={image} alt={avatarAlt} />
      ) : (
        <Paragraph color="white" size="xl" mb={0.5}>
          {getInitials(name)}
        </Paragraph>
      )}
    </Flex>
  )
}

export default AvatarImage
