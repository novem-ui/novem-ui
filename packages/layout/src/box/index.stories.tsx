import React, { PropsWithRef } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Box, BoxProps } from '.'

export default {
  title: 'Components/Layout/Box',
  component: Box
} as Meta

const Template: Story<PropsWithRef<BoxProps>> = (props) => <Box {...props} />

export const Default = Template.bind({})

Default.args = {
  backgroundColor: 'orange.100',
  width: '100%',
  height: '100px',
  borderRadius: '10px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'orange.700'
}
