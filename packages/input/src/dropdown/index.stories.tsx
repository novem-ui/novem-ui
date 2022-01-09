import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Box } from '@novem-ui/layout'
import DropdownComponent from '.'

export default {
  title: 'Components/Input/Dropdown',
  component: DropdownComponent
} as Meta

const Template: Story = (props) => (
  <Box height={48}>
    <DropdownComponent {...props} onChange={console.log}>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </DropdownComponent>
  </Box>
)

export const Dropdown = Template.bind({})

Dropdown.args = {}
