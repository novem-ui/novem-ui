import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import InputComponent from '.'

export default {
  title: 'Components/Input/Input',
  component: InputComponent
} as Meta

const Template: Story = (props) => <InputComponent {...props} />

export const Input = Template.bind({})
Input.args = {}
