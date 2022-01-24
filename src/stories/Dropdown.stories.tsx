import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from '../components/ui/dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {
    bgcolor: { control: 'color' },
    icon: { control: 'text' },
    size: {
      control: { type: 'radio' },
      options: ['large', 'small', 'normal'],
    },
    rounded: { control: 'boolean' },
    shadow: { control: 'boolean' },
    textcolor: { control: 'color' },
    iconposition: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const BGColor = Template.bind({});
BGColor.args = {
  children: 'BGColor',
  bgcolor: '#ffb0b0',
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

export const List = Template.bind({});
List.args = {
  children: 'List',
  list: [{ name: 'hreuswkjzxvc' }, { name: 'sdhfg' }, { name: 'ahdsah' }],
};
