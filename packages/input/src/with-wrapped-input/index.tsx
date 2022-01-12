import { FeedbackBadge } from '@novem-ui/badge'
import { Paragraph } from '@novem-ui/text'
import React, { ChangeEventHandler, ComponentType, forwardRef, HTMLProps, useMemo, useState } from 'react'
import BottomText from '../bottom-text'
import InputLabel from '../input-label'
import TextFieldWrapper from '../text-field-wrapper'

export interface WrapperProps {
  label?: string
  maxLength?: number
  count?: boolean
  onChange?: HTMLProps<HTMLElement>['onChange']
  error?: string | boolean | Error
  helper?: string
  id?: string
  valid?: boolean
  disabled?: boolean
}

function withWrappedInput<T = Record<string, any>>(Component: ComponentType<any>, noBadge?: boolean) {
  // TODO: Write better typings
  const AdvancedInputWrapper = forwardRef<HTMLInputElement, T & WrapperProps & Record<string, any>>(
    ({ label, maxLength, count, onChange, error, helper, id, valid, disabled, ...props }, ref) => {
      const [valueLength, setValueLength] = useState((props.value as string)?.length || 0)
      const feedbackBadgeVariant = useMemo(() => {
        const hasError = !!error
        const isValid = !!valid

        if (hasError) {
          return 'error'
        }

        if (isValid) {
          return 'success'
        }

        return null
      }, [error, valid])

      const onChangeWithLength: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { length } = event.target.value
        setValueLength(length)

        /* istanbul ignore else */
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
          <div style={{ position: 'relative', display: 'flex', width: '100%' }}>
            <Component
              {...props}
              ref={ref}
              id={id}
              error={error}
              maxLength={maxLength}
              valid={valid}
              disabled={disabled}
              onChange={onChangeFunction}
            />
            {!noBadge && feedbackBadgeVariant && (
              <FeedbackBadge variant={feedbackBadgeVariant} position="absolute" top="1.5rem" right="1rem" />
            )}
          </div>
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

  AdvancedInputWrapper.displayName = Component.displayName

  return (AdvancedInputWrapper as undefined) as ComponentType<T & WrapperProps>
}

export default withWrappedInput
