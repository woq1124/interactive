import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Ball } from './Ball';

type ArgTypes = ComponentProps<typeof Ball>;

export default {
  title: 'components/Ball',
  component: Ball,
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
