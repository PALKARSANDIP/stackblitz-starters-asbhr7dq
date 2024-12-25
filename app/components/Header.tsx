'use client';

import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import NextLink from 'next/link';
import { useContext } from 'react';
import { ColorModeContext } from '../context/ColorModeContext';

export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NextLink href="/" passHref legacyBehavior>
            <Box component="a" sx={{ 
              textDecoration: 'none', 
              display: 'flex', 
              alignItems: 'center',
              color: 'inherit'
            }}>
              <Image
                src="/images/docupitch-logo.png"
                alt="DocuPitch Logo"
                width={40}
                height={40}
                style={{ marginRight: '10px' }}
              />
              <Typography variant="h6">
                DocuPitch
              </Typography>
            </Box>
          </NextLink>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <NextLink href="/" passHref legacyBehavior>
            <Button color="inherit" component="a">Home</Button>
          </NextLink>
          <NextLink href="/about" passHref legacyBehavior>
            <Button color="inherit" component="a">About</Button>
          </NextLink>
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}