import React from 'react';
import { Story, Meta } from '@storybook/react';
import DemoComponentTypes from './types'

import Demo from '.';

export default {
  title: 'Core/DemoComponent',
  component: Demo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<DemoComponentTypes> = (props) => <Demo {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Demo component',
};
