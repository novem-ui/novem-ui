export interface BaseColorTypes {
  baseColor: 'orange' | 'red' | 'grey' | 'green'
}

export interface ButtonActionTypes {
  text: string
  action: () => void
}

export interface MessageTypes {
  title?: string
  message: string
  onClose?: () => void
  button?: ButtonActionTypes
  baseColor?: BaseColorTypes
}
