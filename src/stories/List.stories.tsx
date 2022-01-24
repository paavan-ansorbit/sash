import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from '../components/ui/list';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/List',
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    array: { control: 'object' },
    bottomgap: { control: 'number' },
    liststyle: { control: 'boolean' },
    icon: { control: 'text' },
    size: {
      control: { type: 'radio' },
      options: ['large', 'small', 'normal'],
    },
    bgcolor: { control: 'color' },
    iconposition: { control: 'boolean' },
    // ennumber:{control:'boolean'},
  },
} as ComponentMeta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

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

export const Array = Template.bind({});
Array.args = {
  children: 'Array',
  array: [{ name: 'hreusw' }, { name: 'sdhfg' }, { name: 'ahdsah' }],
};

export const ListStyle = Template.bind({});
ListStyle.args = {
  children: 'ListStyle',
  liststyle: true,
};

export const BGColor = Template.bind({});
BGColor.args = {
  children: 'BGColor',
  bgcolor: '#ffffff',
};
export const Bottomgap = Template.bind({});
Bottomgap.args = {
  children: 'Bottomgap',
  bottomgap: 0,
};

export const Icon = Template.bind({});
Icon.args = {
  children: 'Icon',
  icon: 'Calendar',
};

export const Ennumber = Template.bind({});
Ennumber.args = {
  children: 'Ennumber',
  ennumber: true,
};
