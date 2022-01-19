import { SpacingValue } from '@novem-ui/theme'
import { AvatarSizes } from './types'

export const getAvatarSize = (size: AvatarSizes) => {
  const sizes = {
    sm: 10,
    md: 14,
    lg: 16
  }

  return sizes[size] as SpacingValue
}

export const getFontSizes = (size: AvatarSizes) => {
  const nameSize = {
    sm: 'xs',
    md: 'sm',
    lg: 'md'
  }
  const descriptionSize = {
    sm: 'xs',
    md: 'sm',
    lg: 'sm'
  }

  return {
    nameSize: nameSize[size],
    descriptionSize: descriptionSize[size]
  }
}

export const getInitials = (name: string) => {
  const splittedName = name.split(' ')

  if (splittedName.length === 1) {
    return splittedName[0][0].toUpperCase()
  }

  const lastNameIndex = splittedName.length - 1

  return `${splittedName[0][0]}${splittedName[lastNameIndex][0]}`.toUpperCase()
}
