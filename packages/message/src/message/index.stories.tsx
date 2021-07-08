import React from 'react'
import { Story, Meta } from '@storybook/react'

import Message from '.'

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
  onClose: (f) => f,
  button: {
    text: 'Button',
    action: (f) => f
  }
}

export const Default = Template.bind({})
Default.args = {
  baseColor: 'green',
  message: 'Success message'
}

export const Closable = Template.bind({})
Closable.args = {
  baseColor: 'red',
  title: 'Error title',
  message: 'Error message',
  onClose: (f) => f
}

export const WithButton = Template.bind({})
WithButton.args = {
  baseColor: 'grey',
  title: 'Info title',
  message: 'Info message'
}
