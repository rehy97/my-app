// src/components/Hero.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import img1 from '../images/img.webp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offset = 50;
    const scrollPosition = elementPosition - offset;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 1, ease: 'easeOut' };

  return (
    <Box
      id="hero"
      sx={{
        height: '100vh',
        minHeight: '600px',
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          zIndex: 1,
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ ...transition, delay: 0.5 }}
        >
          <Typography 
            variant="h3" 
            sx={{ fontSize: { xs: '3rem', md: '4rem' }, zIndex: 2 }}
          >
            {t('welcome')} 
            <Box
              component="span"
              sx={{ 
                color: '#1976d2', 
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 'bold',
                mb: 3,
              }}
            >
              {t('welcome2')}
            </Box>
          </Typography>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ ...transition, delay: 1 }}
        >
          <Typography variant="h4" sx={{ mb: 3, zIndex: 2 }}>
            +420 773 884 874
          </Typography>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ ...transition, delay: 1.5 }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '1.75rem' }, zIndex: 2 }}>
            {t('subtitle')}
          </Typography>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ ...transition, delay: 2 }}
        >
          <Button 
            variant="contained" 
            onClick={() => scrollToSection('carousel')} 
            sx={{ zIndex: 2, backgroundColor: '#1976d2' }}
          >
            {t('explore_menu')}
          </Button>
        </motion.div>
      </Box>
      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: 16, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          cursor: 'pointer', 
          zIndex: 2
        }}
        onClick={() => scrollToSection('carousel')}
      >
        <ArrowDownwardIcon sx={{ fontSize: 40, color: '#fff', mb: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.1)', }} />
        <Typography variant="caption" sx={{ color: '#fff', mb: 4 }}>{"Menu"}</Typography>
      </Box>
    </Box>
  );
};

export default Hero;