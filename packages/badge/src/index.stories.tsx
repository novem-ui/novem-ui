import React from 'react'
import { Story, Meta } from '@storybook/react'

import Badge from '.'
import { BadgeProps } from './types'

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

const Template: Story<BadgeProps> = (props) => <Badge {...props}>Badge</Badge>

export const Loud = Template.bind({})
Loud.args = {
  hierarchy: 'loud',
  size: 'lg',
}

export const Quiet = Template.bind({})
Quiet.args = {
  hierarchy: 'quiet',
  size: 'lg',
}

export const Small = Template.bind({})
Small.args = {
  hierarchy: 'quiet',
  size: 'sm',
}

export const CustomBaseColor = Template.bind({})
CustomBaseColor.args = {
  hierarchy: 'quiet',
  size: 'sm',
  baseColor: 'green',
}
