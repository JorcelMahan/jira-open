import NextLink from 'next/link';
import { useContext } from 'react';

import { MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

import { UIContext } from '../../context/ui';

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSideMenu}>
          <MenuOutlined />
        </IconButton>
        <NextLink href='/' passHref>
          <Typography variant='h6' color='white'>
            Jira
          </Typography>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
