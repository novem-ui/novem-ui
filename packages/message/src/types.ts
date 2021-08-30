import { ReactElement } from 'react'
import theme from "@novem-ui/theme";

export interface MessageTypes {
  title?: string
  message: string
  onClose?: () => void
  variant: 'error' | 'success'
  action?: ReactElement
  baseColor?: keyof typeof theme.colors.palette
}
