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
          {/* <Link underline='none' color='white'> */}
          <Typography variant='h6' color='white'>
            Jira
          </Typography>
          {/* </Link> */}
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};

// <Link underline='none' color='white'>
//   <Typography variant='h6'>Jira</Typography>
// </Link>;
