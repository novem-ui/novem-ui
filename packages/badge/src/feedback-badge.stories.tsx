import React from 'react'
import { Story, Meta } from '@storybook/react'

import FeedbackBadge, { FeedbackBadgeProps } from './feedback-badge'

export default {
  title: 'Components/FeedbackBadge',
  component: FeedbackBadge,
  argTypes: {
    variant: {
      options: ['success', 'error']
    },
    as: {
      table: {
        disable: true
      }
    },
    theme: {
      table: {
        disable: true
      }
    }
  }
} as Meta

const Template: Story<FeedbackBadgeProps> = (props) => <FeedbackBadge {...props} />

export const Success = Template.bind({})
Success.args = {
  variant: 'success'
}

export const Error = Template.bind({})
Error.args = {
  variant: 'error'
}
