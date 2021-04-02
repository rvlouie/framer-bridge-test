import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from '../design-system/components/Button/Button';
import Play from '../design-system/components/Icons/Play'


export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Click me',
  kind: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Click me',
  kind: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  text: 'Click me',
  kind: 'danger'
};

export const Icon = Template.bind({});
Icon.args = {
  children: <Play />,
  kind: 'secondary',
  contentType: 'icon'
}