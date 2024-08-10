import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Select, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import logo from '../images/logo.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero').offsetHeight;
      setScrolled(window.scrollY > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Get the element's position relative to the document
    const offset = 60;
    const scrollPosition = elementPosition - offset;
  
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={toggleDrawer} sx={{ width: 250 }}>
      <List>
        <ListItem button onClick={() => scrollToSection('hero')}>
          <ListItemText primary={t('home')} />
        </ListItem>
        <ListItem button onClick={() => scrollToSection('carousel')}>
          <ListItemText primary={t('menu')} />
        </ListItem>
        <ListItem button onClick={() => scrollToSection('how-it-works')}>
          <ListItemText primary={t('how-it-works')} />
        </ListItem>
        <ListItem button onClick={() => scrollToSection('payment-options')}>
          <ListItemText primary={t('payment_options')} />
        </ListItem>
        <ListItem>
          <Select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            sx={{ width: '100%' }}
          >
            <MenuItem value="en">
              <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="English" style={{ width: 32, height: 20, marginRight: 8 }} />
                English
              </Box>
            </MenuItem>
            <MenuItem value="cz">
              <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" alt="Czech" style={{ width: 32, height: 20, marginRight: 8 }} />
                Čeština
              </Box>
            </MenuItem>
          </Select>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? '#1976d2': 'transparent',
        transition: 'background-color 0.3s ease-in-out',
        backgroundImage: scrolled ? 'none' : 'url(/path/to/your/hero-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Toolbar>
      <Box 
  sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    flexGrow: 1,
    img: {
      width: { xs: '70px', sm: '75px', md: '80px' },
      height: 'auto',
    },
  }}
>
  <img 
    src={logo} 
    alt="Logo" 
  />
</Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Button color="inherit" 
          sx={{ textTransform: 'none',
           fontSize: { xs: '0.75rem', sm: '1rem', md: '1rem' },
           position: 'relative',
           overflow: 'hidden',
           '&::after': {
             content: '""',
             position: 'absolute',
             left: 0,
             bottom: 0,
             width: '100%',
             height: '2px',
             backgroundColor: '#1976d2', // Underline color
             transform: 'translateX(-100%)',
             transition: 'transform 0.3s ease',
           },
           '&:hover::after': {
             transform: 'translateX(0)', // Underline animation on hover
           }  }} onClick={() => scrollToSection('hero')}>{t('home')}</Button>
          <Button color="inherit" sx={{ textTransform: 'none',
             fontSize: { xs: '0.75rem', sm: '1rem', md: '1rem' },
             position: 'relative',
             overflow: 'hidden',
             '&::after': {
               content: '""',
               position: 'absolute',
               left: 0,
               bottom: 0,
               width: '100%',
               height: '2px',
               backgroundColor: '#1976d2', // Underline color
               transform: 'translateX(-100%)',
               transition: 'transform 0.3s ease',
             },
             '&:hover::after': {
               transform: 'translateX(0)', // Underline animation on hover
             }
              }} onClick={() => scrollToSection('carousel')}>{t('menu')}</Button>
          <Button color="inherit" sx={{ textTransform: 'none',
             fontSize: { xs: '0.75rem', sm: '1rem', md: '1rem' },
             position: 'relative',
             overflow: 'hidden',
             '&::after': {
               content: '""',
               position: 'absolute',
               left: 0,
               bottom: 0,
               width: '100%',
               height: '2px',
               backgroundColor: '#1976d2', // Underline color
               transform: 'translateX(-100%)',
               transition: 'transform 0.3s ease',
             },
             '&:hover::after': {
               transform: 'translateX(0)', // Underline animation on hover
             }
              }} onClick={() => scrollToSection('how-it-works')}>{t('how-it-works')}</Button>
          <Button color="inherit" sx={{ textTransform: 'none',
             fontSize: { xs: '0.75rem', sm: '1rem', md: '1rem' },
             position: 'relative',
             overflow: 'hidden',
             '&::after': {
               content: '""',
               position: 'absolute',
               left: 0,
               bottom: 0,
               width: '100%',
               height: '2px',
               backgroundColor: '#1976d2', // Underline color
               transform: 'translateX(-100%)',
               transition: 'transform 0.3s ease',
             },
             '&:hover::after': {
               transform: 'translateX(0)', // Underline animation on hover
             }
              }} onClick={() => scrollToSection('payment-options')}>{t('payment_options')}</Button>
          <Select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            variant="standard"
            sx={{ color: '#fff', ml: 2 }}
            disableUnderline
          >
            <MenuItem value="en">
              <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="English" style={{ width: 32, height: 20, marginRight: 8 }} />
                English
              </Box>
            </MenuItem>
            <MenuItem value="cz">
              <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" alt="Czech" style={{ width: 32, height: 20, marginRight: 8 }} />
                Čeština
              </Box>
            </MenuItem>
          </Select>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Typography variant="body1" component="div" sx={{ color: '#fff', fontWeight: 'bold', ml: 3 }}>
            +420 773 884 874
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;