import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '../components/ui/avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:'Primary'
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  bordercolor: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small',
  size: 'small',
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: 'Rounded',
  rounded: true,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline',
  outline: true,
};