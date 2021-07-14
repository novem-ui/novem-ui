import theme from "@novem-ui/theme";

export interface ButtonActionTypes {
  text: string
  action: () => void
}

export interface MessageTypes {
  title?: string
  message: string
  onClose?: () => void
  button?: ButtonActionTypes
  baseColor?: keyof typeof theme.colors.palette
}
