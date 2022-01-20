import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '../components/ui/avatar';

export default {
  title: 'Example/Avatar',

  component: Avatar,
  argTypes: {
    avatar: {control:'text'},
    bgcolor: { control: 'color' },
    rounded: { control: 'boolean' },
    shadow: { control: 'boolean' },
    bordercolor: { control: 'color' },
    size: {
      control: { type: 'radio' },
      options: ['large', 'small', 'normal'],
    },
    outline: { control: 'boolean' },
    hideicon: { control: 'boolean' },

    iconDirection: {
      control: { type: 'radio' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Avatarsrc = Template.bind({});
Avatarsrc.args = {
  children: 'Avatarsrc',
  avatar: 'https://i.pravatar.cc/200',
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

export const Shadow = Template.bind({});
Shadow.args = {
  children: 'Shadow',
  shadow: true,
};

export const Icon = Template.bind({});
Icon.args = {
  children: 'Icon',
  hideicon: true,
  icon: 'Calendar',
  iconDirection: 'bottom-right',
};


export const IconColor = Template.bind({});
IconColor.args = {
  children: 'IconColor',
  iconcolor: 'black',
};

export const BGColor = Template.bind({});
BGColor.args = {
  children: 'BGColor',
  bgcolor: '#ffb0b0',
};
