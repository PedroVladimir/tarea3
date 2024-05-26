import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuItems from './MenuItems';

function Navigation() {
 
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/logo.png" alt="Descripción de la imagen" style={{ marginRight: '10px' }} />
          <MenuItems />
        </Box>
        <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ p: 1 }} color="success">
            <SearchIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton sx={{ p: 1, marginLeft: 2 }} color="success">
            <DarkModeOutlinedIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Button sx={{ ml: 2, p: 1 }} variant="contained" color="success">
            Reservar
          </Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  );
}

export default Navigation;
