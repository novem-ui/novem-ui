import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import IBadge from './types'

import Badge from '.';

export default {
  title: 'Core/Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IBadge> = (props) => (
  <Badge {...props} >Badge</Badge>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};
