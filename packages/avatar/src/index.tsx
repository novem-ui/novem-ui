import React, { useEffect, VoidFunctionComponent } from 'react'

import { Flex } from '@novem-ui/layout'

import AvatarImage from './avatar-image'
import { AvatarProps } from './types'
import AvatarText from './avatar-text'
import { getAvatarSize } from './utils'

const Avatar: VoidFunctionComponent<AvatarProps> = ({ size = 'md', image, name, description }) => {
  const avatarSize = getAvatarSize(size)

  useEffect(() => {
    if (!image && !name) {
      throw new Error(`Avatar should receive at least an image or a name prop`)
    }
  }, [image, name])

  return (
    <Flex height={avatarSize}>
      <AvatarImage image={image} name={name} avatarSize={avatarSize} />
      {name && <AvatarText name={name} size={size} description={description} />}
    </Flex>
  )
}

export default Avatar
