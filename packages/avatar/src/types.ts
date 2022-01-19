export type AvatarSizes = 'sm' | 'md' | 'lg'

export interface AvatarProps {
  description?: string
  image?: string
  name?: string
  size?: AvatarSizes
}
