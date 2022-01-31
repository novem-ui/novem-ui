import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Tooltip from '.'

export default {
  title: 'Components/Tooltip',
  component: Tooltip
} as Meta

const Template: Story = (props) => (
  <div style={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      <Tooltip {...props}>Quisquam</Tooltip> at porro aliquid. Aliquid, eaque quidem. Delectus aliquid ducimus fugiat
      neque?
    </p>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Tooltip title',
  message: 'tooltip message',
  variant: 'theme'
}

export const SystemColor = Template.bind({})
SystemColor.args = {
  title: 'Tooltip title',
  message: 'tooltip message',
  variant: 'color-scheme'
}

export const Position = Template.bind({})
Position.args = {
  title: 'Tooltip title',
  message: 'tooltip message',
  position: 'left'
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  title: 'Tooltip title',
  message: 'tooltip message',
  position: 'left',
  baseColor: 'indigo'
}
