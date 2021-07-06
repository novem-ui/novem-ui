import React, { FunctionComponent } from 'react'
import { Label } from '@novem-ui/text'

const InputLabel: FunctionComponent<{ htmlFor: string }> = ({ children, htmlFor }) =>
  !!children && (
    <Label size="xs" ml={2} mb={1} htmlFor={htmlFor} style={{ display: 'block' }}>
      {children}
    </Label>
  )

export default InputLabel
