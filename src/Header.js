import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact', 'gallery'];

function Header(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} style={{background: '#282c33'}}>
        <Typography variant="h6"
            className='logo_text'
            sx={{ flexGrow: 1,my: 2,textAlign: 'start',pl:2,color:'#fff' }}>
           Web <span style={{color:'#C778DD',fontWeight:'bold'}}>Designer</span>
        </Typography>

        <Divider />
        <List>
          {/* {navItems.map((item) => ( */}
            <ListItem  disablePadding sx={{display: 'block'}} >
              <ListItemButton sx={{ textAlign: 'start', color: '#fff' }}>
                <ListItemText onClick={() => navigate('/')} primary={"Home"} />
              </ListItemButton>

              <ListItemButton sx={{ textAlign: 'start', color: '#fff' }}>
                <ListItemText onClick={()=> navigate('/about')} primary={"About Us"} />
              </ListItemButton>

              <ListItemButton sx={{ textAlign: 'start', color: '#fff' }}>
                <ListItemText onClick={()=> navigate('/works')} primary={"Works"} />
              </ListItemButton>

              <ListItemButton sx={{ textAlign: 'start', color: '#fff' }}>
                <ListItemText onClick={()=> navigate('/contact')} primary={"Contacts"} />
              </ListItemButton>
              
            </ListItem>
          {/* ))} */}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AppBar component="nav" className='header'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className='logo_text'
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Web <span style={{color:'#C778DD',fontWeight:'bold'}}>Designer</span>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => ( */}
              <Button sx={{ color: '#fff' }} className='menu_link' onClick={()=> navigate('/')}>
                 Home
              </Button>

              <Button sx={{ color: '#fff' }} className='menu_link' onClick={()=> navigate('/about')}>
                 About Us
              </Button>
              <Button sx={{ color: '#fff' }} className='menu_link' onClick={()=> navigate('/works')}>
                 Works
              </Button>
              <Button sx={{ color: '#fff' }} className='menu_link' onClick={()=> navigate('/contact')}>
                 Contacts
              </Button>
            {/* ))} */}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
    </>
  )
}

export default Header;