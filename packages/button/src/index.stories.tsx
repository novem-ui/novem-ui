import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
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

const Template: Story<ButtonProps> = (props) => <Button {...props}>Button</Button>

export const Loud = Template.bind({})
Loud.args = {
  hierarchy: 'loud',
  size: 'md'
}

export const Quiet = Template.bind({})
Quiet.args = {
  hierarchy: 'quiet',
  size: 'md'
}

export const Link = Template.bind({})
Link.args = {
  hierarchy: 'link',
  size: 'md'
}

export const Large = Template.bind({})
Large.args = {
  hierarchy: 'quiet',
  size: 'lg'
}

export const Medium = Template.bind({})
Medium.args = {
  hierarchy: 'quiet',
  size: 'md'
}

export const Small = Template.bind({})
Small.args = {
  hierarchy: 'quiet',
  size: 'sm'
}

export const Disabled = Template.bind({})
Disabled.args = {
  size: 'lg',
  disabled: true
}
