import React, { useMemo, VoidFunctionComponent } from 'react'
import { Paragraph } from '@novem-ui/text'

export interface BotttomTextProps {
  error?: boolean | string | Error
  helper?: string
}

const BottomText: VoidFunctionComponent<BotttomTextProps> = ({ error, helper = '' }) => {
  const errorMessage = useMemo(() => {
    if (typeof error === 'string') {
      return error
    }

    if (error instanceof Error) {
      return error.message
    }
  }, [error])

  if (helper || errorMessage) {
    const color = errorMessage ? 'red.500' : 'grey.400'
    return (
      <Paragraph size="xs" color={color} mt={1} ml={2}>
        {errorMessage || helper}
      </Paragraph>
    )
  }

  return null
}

export default BottomText
