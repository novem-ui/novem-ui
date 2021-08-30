import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button from '@novem-ui/button'
import Message from './index'

const action = () => (
  <Button hierarchy="link" size="sm" onClick={() => true}>
    Button
  </Button>
)

export default {
  title: 'Components/Message',
  component: Message,
  argTypes: {
    baseColor: {
      type: 'radio',
      options: ['red', 'green', 'orange', 'grey', 'yellow'],
      defaultValue: 'grey'
    },
    button: {
      type: 'raw',
      defaultValue: null
    },
    onClose: {
      type: 'raw',
      defaultValue: null
    },
    message: {
      type: 'string',
      defaultValue: 'message'
    },
    as: {
      table: {
        disable: true
      }
    },
    theme: {
      table: {
        disable: true
      }
    }
  }
} as Meta

const Template: Story<any> = (props) => <Message {...props}>Button</Message>

export const WithTitle = Template.bind({})
WithTitle.args = {
  baseColor: 'green',
  title: 'Success title',
  message: 'Success message',
  variant: 'success',
  onClose: (f) => f
}

export const Default = Template.bind({})
Default.args = {
  baseColor: 'green',
  message: 'Success message',
  variant: 'success'
}

export const Closable = Template.bind({})
Closable.args = {
  baseColor: 'red',
  title: 'Error title',
  message: 'Error message',
  onClose: (f) => f,
  variant: 'error'
}

export const WithButton = Template.bind({})
WithButton.args = {
  baseColor: 'grey',
  title: 'Info title',
  message: 'Info message',
  action: action(),
  variant: 'error'
}
