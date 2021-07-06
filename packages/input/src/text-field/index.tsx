import React, { ChangeEventHandler, forwardRef, HTMLProps, useState } from 'react'
import { SpacingProps } from '@novem-ui/base'
import { Paragraph } from '@novem-ui/text'

import Input from '../input'
import TextFieldWrapper from '../text-field-wrapper'
import BottomText from '../bottom-text'
import InputWrapper from '../input-wrapper'
import InputLabel from '../input-label'

export interface ExtendedTextFieldProps {
  label?: string
  count?: boolean
  error?: boolean | Error | string
  valid?: boolean
  helper?: string
  readOnly?: boolean
}

export type TextFieldProps = ExtendedTextFieldProps & Omit<HTMLProps<HTMLInputElement> & SpacingProps, 'as'>

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, maxLength, count, onChange, error, helper, id, valid, disabled, ...props }, ref) => {
    const [valueLength, setValueLength] = useState((props.value as string)?.length || 0)

    const onChangeWithLength: ChangeEventHandler<HTMLInputElement> = (event) => {
      const { length } = event.target.value
      setValueLength(length)

      if (onChange) {
        onChange(event)
      }
    }

    const shouldCount = !!(count || maxLength)
    const onChangeFunction = shouldCount ? onChangeWithLength : onChange
    const shouldShowBottomTextContent = !!(shouldCount || count || maxLength || helper || error)

    return (
      <TextFieldWrapper {...props}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <InputWrapper error={error} valid={valid} disabled={disabled}>
          <Input
            {...props}
            ref={ref}
            id={id}
            error={error}
            maxLength={maxLength}
            valid={valid}
            disabled={disabled}
            onChange={onChangeFunction}
          />
        </InputWrapper>
        {shouldShowBottomTextContent && (
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <BottomText error={error} helper={helper} />
            </div>
            {shouldCount && (
              <Paragraph size="xs" align="right" mx={2} mt={1} color="grey.400">
                {valueLength}
                {!!maxLength && `/${maxLength}`}
              </Paragraph>
            )}
          </div>
        )}
      </TextFieldWrapper>
    )
  }
)

TextField.displayName = 'TextField'

export default TextField
