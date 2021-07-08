import React from 'react'
import { Story, Meta } from '@storybook/react'

import Message from '.'

export default {
  title: 'Components/Message',
  component: Message,
  argTypes: {
    hierarchy: {
      type: 'radio',
      options: ['loud', 'quiet']
    },
    baseColor: {
      type: 'radio',
      options: ['red', 'green', 'orange', 'grey', 'yellow']
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
  title: 'Dummy title',
  message: 'Dummy message'
}

export const Default = Template.bind({})
Default.args = {
  message: 'Dummy message'
}

export const Closable = Template.bind({})
Closable.args = {
  title: 'Dummy title',
  message: 'Dummy message',
  onClose: (f) => f
}

export const WithButton = Template.bind({})
WithButton.args = {
  title: 'Dummy title',
  message: 'Dummy message',
  onClose: (f) => f,
  button: {
    text: 'Button',
    action: (f) => f
  }
}
