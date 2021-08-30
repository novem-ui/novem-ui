import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import LabelComponent, { LabelProps } from '.'

export default {
  title: 'Components/Text/Label',
  component: LabelComponent,
  argTypes: {
    size: { control: 'radio', options: ['lg', 'md', 'sm', 'xs'] },
    align: { control: 'radio', options: ['left', 'right', 'center', 'justify', 'initial', 'inherit'] },
    theme: {
      table: {
        disable: true
      }
    }
  }
} as Meta

const Template: Story<LabelProps> = (props) => <LabelComponent {...props}>Text</LabelComponent>

export const Label = Template.bind({})
Label.args = {}
