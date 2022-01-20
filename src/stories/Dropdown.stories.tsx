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
    disabled: { control: 'boolean' },
    hideicon: { control: 'boolean' },
    outline: { control: 'boolean' },
    opacity: { control: 'number' },
    textcolor: { control: 'color' },
    iconcolor: { control: 'color' },
    bordercolor: { control: 'color' },
    buttonposition: { control: 'boolean' },
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

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline',
  outline: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disable: true,
};

export const Icon = Template.bind({});
Icon.args = {
  children: 'Icon',
  icon: 'Calendar',
};

export const Hideicon = Template.bind({});
Hideicon.args = {
  children: 'HideIcon',
  hideicon: false,
};

export const Shadow = Template.bind({});
Shadow.args = {
  children: 'Shadow',
  shadow: true,
};

export const Opacity = Template.bind({});
Opacity.args = {
  children: 'Opacity',
};

export const Textcolor = Template.bind({});
Textcolor.args = {
  children: 'Textcolor',
  textcolor: 'black',
};
export const IconColor = Template.bind({});
IconColor.args = {
  children: 'IconColor',
  iconcolor: 'black',
};

export const Bordercolor = Template.bind({});
Bordercolor.args = {
  children: 'Bordercolor',
  bordercolor: 'white',
};

export const ButtonPosition = Template.bind({});
ButtonPosition.args = {
  children: 'ButtonPosition',
  buttonposition: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Loading',
  loading: true,
};

export const List = Template.bind({});
List.args = {
  children: 'List',
  list: [{ name: 'hreusw' }, { name: 'sdhfg' }, { name: 'ahdsah' }],
};