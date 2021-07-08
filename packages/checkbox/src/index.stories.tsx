import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as Meta

export const Default: Story<CheckboxProps> = () => <Checkbox />

export const CustomColor: Story<CheckboxProps> = (args) => <Checkbox {...args} />

CustomColor.args = {
  baseColor: 'grey'
}
