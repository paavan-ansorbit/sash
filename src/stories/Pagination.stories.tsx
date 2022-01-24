import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from '../components/ui/pagination';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Pagination',
  component: Pagination,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bgcolor: { control: 'color' },
    rounded: { control: 'boolean' },
    shadow: { control: 'boolean' },
    outline: { control: 'boolean' },
    bordercolor: { control: 'color' },
    hidenext: { control: 'boolean' },
    hideprev: { control: 'boolean' },
  },
} as ComponentMeta<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const BGColor = Template.bind({});
BGColor.args = {
  children: 'BGColor',
  bgcolor: '#ffffff',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disable: true,
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


export const List = Template.bind({});
List.args = {
  children: 'List',
  list: ['Prev','1','2','3','4','5','6','7','Next'],
};


export const Hidenext = Template.bind({});
Hidenext.args = {
  children: 'Next',
  hidenext: true,
  hideprev: true,
};