import React from 'react';

import { Story, Meta } from '@storybook/react';

import Card, { CardProps } from './Card';

export default {
  title: 'UI/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = function Component(args) {
  return <Card {...args} />;
};

export const Title = Template.bind({});
Title.args = {
  title: 'Sala X',
  buttonContent: 'Ver pessoas com acesso',
};

export const TitleSubtitle = Template.bind({});
TitleSubtitle.args = {
  title: 'Sala X',
  subtitle: '001',
  buttonContent: 'Ver pessoas com acesso',
};

export const Full = Template.bind({});
Full.args = {
  title: 'Sala X',
  subtitle: '001',
  info: 'Lá ele',
  buttonContent: 'Ver pessoas com acesso',
};
