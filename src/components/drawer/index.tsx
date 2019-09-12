import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  IconButton,
} from '@material-ui/core';
import { useIsVisible } from 'hooks';
import { MdMenu } from 'react-icons/all';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Drawer = () => {
  const classes = useStyles();
  const { isVisible, toggle } = useIsVisible();

  const list = () => (
    <div className={classes.list} role="presentation" onClick={toggle}>
      <List>
        <ListItem button>ITEM</ListItem>
      </List>
      <Divider />
    </div>
  );
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggle}
      >
        <MdMenu />
      </IconButton>
      <SwipeableDrawer open={isVisible} onClose={toggle} onOpen={toggle}>
        {list()}
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
