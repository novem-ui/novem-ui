import React, { PropsWithRef } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import TextFieldComponent, { TextFieldProps } from '.'

export default {
  title: 'Components/Input/TextField',
  component: TextFieldComponent,
  argTypes: {
    label: {
      type: 'string'
    },
    placeholder: {
      type: 'string'
    },
    count: {
      type: 'boolean'
    },
    maxLength: { type: 'number' },
    error: {
      type: 'string'
    },
    valid: {
      type: 'boolean'
    },
    helper: {
      type: 'string'
    },
    readOnly: { type: 'boolean' },
    disabled: { type: 'boolean' },
    value: { type: 'string' }
  }
} as Meta

const Template: Story<PropsWithRef<TextFieldProps>> = (props) => <TextFieldComponent {...props} />

export const Default = Template.bind({})

Default.args = {
  label: 'Username',
  placeholder: 'Username'
}

export const CustomColor = Template.bind({})

CustomColor.args = {
  label: 'Username',
  placeholder: 'Username',
  baseColor: "blue"
}


export const CharacterCounter = Template.bind({})

CharacterCounter.args = {
  label: 'Username',
  placeholder: 'Username',
  count: true
}

export const MaxLength = Template.bind({})

MaxLength.args = {
  label: 'Username',
  placeholder: 'Username',
  maxLength: 16
}

export const ErrorBoolean = Template.bind({})

ErrorBoolean.args = {
  label: 'Password',
  placeholder: 'Password',
  type: 'password',
  error: true
}

export const ErrorString = Template.bind({})

ErrorString.args = {
  label: 'Password',
  placeholder: 'Password',
  type: 'password',
  error: 'Password is required'
}

export const ErrorObject = Template.bind({})

ErrorObject.args = {
  label: 'Password',
  placeholder: 'Password',
  type: 'password',
  error: new Error('Password is required')
}

export const Valid = Template.bind({})

Valid.args = {
  label: 'Password',
  placeholder: 'Password',
  type: 'password',
  value: 'Contraseña123_',
  valid: true
}

export const Helper = Template.bind({})

Helper.args = {
  label: 'Password',
  placeholder: 'Password',
  type: 'password',
  count: true,
  helper:
    'Password should have at least 8 characters long, an uppercase character, a number, and a special character (-_@$%!#)'
}

export const ReadOnly = Template.bind({})

ReadOnly.args = {
  label: 'Full Name',
  value: 'John Doe',
  readOnly: true,
  helper: 'Name cannot be changed'
}

export const Disabled = Template.bind({})

Disabled.args = {
  label: 'Full Name',
  value: 'John Doe',
  disabled: true,
  helper: 'Name cannot be changed'
}
