import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BigQuote } from '.';
import { ProseContainer, ProseContainerProps } from '../ProseContainer';

const meta: Meta = {
  title: 'Mdx Components/BigQuote',
  component: BigQuote,
  argTypes: {
    children: {
      defaultValue:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ab?',
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story: React.ElementType) => (
      <ProseContainer>
        <Story />
      </ProseContainer>
    ),
  ],
};

export default meta;

export const defaultCase: Story<ProseContainerProps> = args => (
  <BigQuote {...args} />
);
