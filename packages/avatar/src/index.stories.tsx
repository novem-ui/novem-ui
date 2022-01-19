import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Avatar from '.'

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta

const Template: Story = (props) => <Avatar {...props} />

export const Default = Template.bind({})
Default.args = {
  name: 'michi',
  description: 'a small michi',
  image:
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=100'
}

export const Small = Template.bind({})
Small.args = {
  name: 'michi',
  description: 'a small michi',
  size: 'sm',
  image:
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=100'
}

export const Medium = Template.bind({})
Medium.args = {
  name: 'michi',
  description: 'a small michi',
  size: 'md',
  image:
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=100'
}

export const Large = Template.bind({})
Large.args = {
  name: 'michi',
  description: 'a small michi',
  size: 'lg',
  image:
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=100'
}

export const NoDescription = Template.bind({})
NoDescription.args = {
  name: 'michi',
  image:
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=100'
}

export const NoPhoto = Template.bind({})
NoPhoto.args = {
  name: 'michi',
  description: 'a small michi'
}

export const NoName = Template.bind({})
NoName.args = {
  image:
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=100'
}
