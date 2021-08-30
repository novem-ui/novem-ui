import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      type: 'boolean'
    },
    indeterminate: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: Story<CheckboxProps> = (props) => <Checkbox {...props} />

export const Checked: Story<CheckboxProps> = (props) => <Checkbox {...props} />
Checked.args = {
  checked: true
}

export const Indeterminate: Story<CheckboxProps> = (props) => <Checkbox {...props} />
Indeterminate.args = {
  indeterminate: true
}
export const CustomColor: Story<CheckboxProps> = (props) => <Checkbox {...props} />
CustomColor.args = {
  baseColor: 'grey'
}
