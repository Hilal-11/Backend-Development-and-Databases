import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed">
        <Toolbar className="px-20">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Media Upload
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}