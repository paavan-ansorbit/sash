import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tags from '../components/ui/tags';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tags',
  component: Tags,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tags>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  color: 'secondary',
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

