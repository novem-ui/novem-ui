import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import theme from '@novem-ui/theme'
import HeadingComponent, { ParagraphProps } from '.'

export default {
  title: 'Components/Text/Paragraph',
  component: HeadingComponent,
  argTypes: {
    size: { control: 'radio', options: Object.keys(theme.typography.textFontSizes) },
    as: { control: 'radio', options: ['p', 'strong', 'span', 'mark', 'ins', 'del', 'sup', 'small', 'i', 'b'] },
    align: { control: 'radio', options: ['left', 'right', 'center', 'justify', 'initial', 'inherit'] },
    theme: {
      table: {
        disable: true
      }
    }
  }
} as Meta

const Template: Story<ParagraphProps> = (props) => (
  <HeadingComponent color="red" {...props}>
    Text
  </HeadingComponent>
)

export const Heading = Template.bind({})
Heading.args = {}
