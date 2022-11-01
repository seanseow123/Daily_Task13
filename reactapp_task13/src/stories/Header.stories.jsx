import React from 'react';
import { Header } from './Header';

export default {
  title: 'Webpage/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Sean Seow',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
