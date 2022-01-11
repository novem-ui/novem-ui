import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Box } from '@novem-ui/layout'
import DropdownComponent, { Option } from '.'

export default {
  title: 'Components/Input/Dropdown',
  component: DropdownComponent
} as Meta

const Template: Story = (props) => (
  <Box height={48}>
    <DropdownComponent {...props}>
      <Option value="1">Option 1</Option>
      <Option value="2">Option 2</Option>
      <Option value="3">Option 3</Option>
      <Option value="4">Option 4</Option>
    </DropdownComponent>
  </Box>
)

export const Dropdown = Template.bind({})

Dropdown.args = {
  value: '3'
}

export const Uncontrolled = Template.bind({})

Uncontrolled.args = {}

export const CustomColor = Template.bind({})

CustomColor.args = {
  baseColor: 'blue'
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  label: 'Select your option',
  baseColor: 'blue'
}

export const WithHelper = Template.bind({})

WithHelper.args = {
  label: 'Select your option',
  helper: 'lorem ipsum',
  baseColor: 'blue'
}

export const WithError = Template.bind({})

WithError.args = {
  label: 'Select your option',
  error: 'lorem ipsum',
  baseColor: 'blue'
}

export const Disabled = Template.bind({})

Disabled.args = {
  label: 'Select your option',
  disabled: true,
  baseColor: 'blue'
}
