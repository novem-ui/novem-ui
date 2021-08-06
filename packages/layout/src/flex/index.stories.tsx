import React, { PropsWithRef } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Flex, FlexProps } from '.'

export default {
  title: 'Components/Layout/Flex',
  component: Flex
} as Meta

const Template: Story<PropsWithRef<FlexProps>> = (props) => <Flex {...props}>text content</Flex>

export const Default = Template.bind({})

Default.args = {
  backgroundColor: 'orange.100',
  height: '100px',
  borderRadius: '10px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'orange.700',
  align: 'center',
  justify: 'center'
}
