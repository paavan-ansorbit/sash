import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/ui/button';

export default {
  title: 'Example/MyButton',
  component: Button,
  argTypes: {
    bgcolor: { control: 'color' },
    icon: { control: 'text' },
    size: {
      control: { type: 'radio' },
      options: ['small', 'normal', 'large'],
    },
    rounded: { control: 'boolean' },
    shadow: { control: 'boolean' },
    disable: { control: 'boolean' },
    iconposition: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BGColor = Template.bind({});
BGColor.args = {
  children: 'BGColor',
  bgcolor: '#ffffff',
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

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disable: false,
};

export const Icon = Template.bind({});
Icon.args = {
  children: 'Icon',
  icon: 'Calendar',
};

export const Shadow = Template.bind({});
Shadow.args = {
  children: 'Shadow',
  shadow: true,
};

export const iconposition = Template.bind({});
iconposition.args = {
  children: 'iconposition',
  iconposition: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Loading',
  loading: true,
};
