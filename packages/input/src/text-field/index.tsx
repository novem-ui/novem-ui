import { HTMLProps, ComponentType } from 'react'
import { SpacingProps } from '@novem-ui/base'

import Input, { ExtendedInputProps } from '../input'
import withWrappedInput from '../with-wrapped-input'

export interface ExtendedTextFieldProps extends ExtendedInputProps {
  label?: string
  count?: boolean
  helper?: string
  readOnly?: boolean
}

export type TextFieldProps = ExtendedTextFieldProps & Omit<HTMLProps<HTMLInputElement> & SpacingProps, 'as'>

const TextField = withWrappedInput(Input) as ComponentType<TextFieldProps>

TextField.displayName = 'TextField'

export default TextField
