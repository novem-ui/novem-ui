import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Switch, { SwitchProps } from '.'

export default {
  title: 'Components/Switch',
  component: Switch
} as Meta

export const Default: Story<SwitchProps> = () => <Switch />

export const CustomColor: Story<SwitchProps> = (args) => <Switch {...args} />

CustomColor.args = {
  baseColor: 'grey'
}

export const Disabled: Story<SwitchProps> = (args) => <Switch {...args} />

Disabled.args = {
  disabled: true
}
