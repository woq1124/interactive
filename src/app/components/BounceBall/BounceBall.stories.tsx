import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BounceBall } from './BounceBall';

type ArgTypes = ComponentProps<typeof BounceBall>;

export default {
  title: 'components/BounceBall',
  component: BounceBall,
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
