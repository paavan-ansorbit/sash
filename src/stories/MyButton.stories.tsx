import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/ui/button';

export default {
  title: 'Example/MyButton',
  component: Button,
  argTypes: {
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  color: 'secondary'
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

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disable: true,
  pointer: false,
};

export const Icon = Template.bind({});
Icon.args = {
  children: 'Icon',
  icon: 'Calendar',
};

export const Hideicon = Template.bind({});
Hideicon.args = {
  children: 'HideIcon',
  hideicon: true
}