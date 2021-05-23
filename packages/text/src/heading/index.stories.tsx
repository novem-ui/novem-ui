import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import theme from '@novem-ui/theme'
import HeadingComponent, { HeadingProps } from '.'

export default {
  title: 'Components/Text/Heading',
  component: HeadingComponent,
  argTypes: {
    size: { control: 'radio', options: Object.keys(theme.typography.headingFontSizes) },
    as: { control: 'radio', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    align: { control: 'radio', options: ['left', 'right', 'center', 'justify', 'initial', 'inherit'] },
    theme: {
      table: {
        disable: true
      }
    }
  }
} as Meta

const Template: Story<HeadingProps> = (props) => (
  <HeadingComponent color="red" {...props}>
    Text
  </HeadingComponent>
)

export const Heading = Template.bind({})
Heading.args = {}
