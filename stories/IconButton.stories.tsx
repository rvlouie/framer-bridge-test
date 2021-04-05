import React from 'react';
import { Story, Meta } from '@storybook/react';

import { IconButton } from '../design-system/components/Button/Button'

export default {
  title: 'Example/IconButton',
  component: IconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  kind: 'secondary',
  icon: 'play'
};

