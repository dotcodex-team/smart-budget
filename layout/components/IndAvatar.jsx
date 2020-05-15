import React, { useState } from 'react';
import {
  Avatar,
  makeStyles,
  IconButton,
  Badge,
  Toolbar,
  Grid,
  Menu,
  MenuItem
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyle = makeStyles({
  root: {},
  margenes: {
    marginRight: 10
  },
  menu: {
    marginTop: 50,
    '& ul': {
      background: '#e3f2fd'
    }
  },
  menuItem: {
    background: '#e3f2fd'
  }
});

const IndAvatar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const mailIcon = () => {
    console.log('hola');
  };

  const notificatioIcon = () => {
    console.log('notificacion');
  };

  const classes = useStyle();

  const menuAvatar = [
    { name: 'Perfil', path: '' },
    { name: 'Cuenta', path: '' },
    { name: 'Logout', path: '' }
  ];

  return (
    <>
      <Toolbar className={classes.root}>
        <Grid container justify="flex-end" alignItems="center">
          <IconButton
            aria-label="show 4 new mails"
            color="inherit"
            onClick={mailIcon}
            className={classes.margenes}
          >
            <Badge color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={notificatioIcon}
            className={classes.margenes}
          >
            <Badge color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={handleClick}>
            <Avatar alt="Remy Sharp" src="/images/pp.jpg" />
          </IconButton>
          <Menu
            className={classes.menu}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuAvatar.map((item, id) => (
              <MenuItem
                key={id}
                className={classes.menuItem}
                onClick={handleClose}
              >
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Toolbar>
    </>
  );
};
export default IndAvatar;
