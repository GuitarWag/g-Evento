import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton } from '@material-ui/core';
import Avatar from 'components/avatar';
import { MdMenu } from 'react-icons/md';
import styled from 'styled-components';
import LanguageSelector from '../language-selector';
import NewEventButton from '../new-event-button';
import Drawer from 'components/drawer';

const Container = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const NavBar = () => (
  <AppBar>
    <Container>
      <Drawer />
      <NewEventButton />
      <LanguageSelector />
      <Avatar />
    </Container>
  </AppBar>
);

export default NavBar;
