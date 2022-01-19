import React, { VoidFunctionComponent } from 'react'

import { Flex } from '@novem-ui/layout'

import { SpacingProps } from '@novem-ui/base'
import AvatarImage from './avatar-image'
import { AvatarProps } from './types'
import AvatarText from './avatar-text'
import { getAvatarSize } from './utils'

const Avatar: VoidFunctionComponent<AvatarProps & SpacingProps> = ({
  size = 'md',
  image,
  name,
  description,
  ...props
}) => {
  if (!image && !name) {
    throw new Error(`Avatar should receive at least an image or a name prop`)
  }

  const avatarSize = getAvatarSize(size)

  return (
    <Flex height={avatarSize} {...props}>
      <AvatarImage image={image} name={name} avatarSize={avatarSize} />
      {name && <AvatarText name={name} size={size} description={description} />}
    </Flex>
  )
}

export default Avatar
