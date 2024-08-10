import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: '#1976d2', color: '#fff', padding: 3, textAlign: 'center' }}>
      <Typography variant="body1" sx={{ mb: 1 }}>
        +123 456 7890
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        <Link href="mailto:contact@example.com" color="inherit">contact@example.com</Link>
      </Typography>
      <Box sx={{ mb: 2 }}>
        <IconButton
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{ mx: 0.5 }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{ mx: 0.5 }}
        >
          <Instagram />
        </IconButton>
      </Box>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} HotovkyNonstop
      </Typography>
    </Box>
  );
};

export default Footer;