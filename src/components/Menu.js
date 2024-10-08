import React, { useState } from 'react';
import { Typography, Grid, Box, Avatar, IconButton, Divider, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuItem from './MenuItem';
import dish1 from '../images/dish1.webp';
import dish2 from '../images/dish2.webp';
import dish3 from '../images/dish3.webp';
import dish4 from '../images/dish4.webp';
import dish5 from '../images/dish5.webp';
import dish6 from '../images/dish6.webp';
import dish7 from '../images/dish7.webp';
import snack1 from '../images/snack1.webp';
import cola from '../images/cola.webp';
import sprite from '../images/sprite.webp';
import fanta from '../images/fanta.webp';
import { useTranslation } from 'react-i18next';
import FlatwareIcon from '@mui/icons-material/Flatware';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import SnackIcon from '@mui/icons-material/EmojiFoodBeverage';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const CategoryButton = styled(IconButton)(({ theme, selected }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '12px',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  backgroundColor: selected ? '#1976d2' : '#f5f5f5',
  color: selected ? '#ffffff' : '#333333',
  '&:hover': {
    backgroundColor: selected ? '#1565c0' : '#e0e0e0',
    transform: 'translateY(-5px)',
  },
}));

const CategoryIcon = styled(Box)(({ selected }) => ({
  fontSize: '2rem',
  marginBottom: '8px',
  transition: 'all 0.3s ease',
  transform: selected ? 'scale(1.1)' : 'scale(1)',
}));

const Menu = () => {
  const { t } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState(1);

  const categories = [
    { id: 1, name: t('foods'), icon: <FlatwareIcon fontSize="large" /> },
    { id: 2, name: t('drinks'), icon: <LocalBarIcon fontSize="large" /> },
    { id: 3, name: t('snacks'), icon: <SnackIcon fontSize="large" /> },
    { id: 4, name: t('others'), icon: <MoreHorizIcon fontSize="large" /> },
  ];

  const items = [
    { id: 1, name: t('dish1'), price: 150, category: 1, image: dish1, rating: 4.5, weight: '400 g' },
    { id: 2, name: t('dish2'), price: 120, category: 1, image: dish2, rating: 4.0, weight: '400 g' },
    { id: 3, name: t('dish3'), price: 130, category: 1, image: dish3, rating: 4.2, weight: '400 g' },
    { id: 4, name: t('dish4'), price: 170, category: 1, image: dish5, rating: 4.7, weight: '400 g' },
    { id: 5, name: t('dish5'), price: 170, category: 1, image: dish7, rating: 4.7, weight: '400 g' },
    { id: 8, name: 'Cola', description: 'Refreshing soda', price: 50, category: 2, image: cola, rating: 4.0, weight: '0.5 l' },
    { id: 9, name: 'Sprite', description: 'Lemon-lime soda', price: 50, category: 2, image: sprite, rating: 4.0, weight: '0.5 l' },
    { id: 10, name: 'Fanta', description: 'Orange soda', price: 50, category: 2, image: fanta, rating: 4.0, weight: '0.5 l' },
    { id: 11, name: t('snack1'), price: 80, category: 3, image: snack1, rating: 4.5, weight: '200 g' },
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredItems = items.filter(item => item.category === selectedCategory);

  const AnimatedBox = animated(Box);

  return (
    <Box id="carousel" sx={{ padding: { xs: 2, sm: 3, md: 4 }, backgroundColor: '#f5f7fa' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'center',
          overflowX: 'auto',
          width: '100%',
          mb: 4,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
        }}
      >
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              display: 'flex',
              minWidth: { xs: '25%', sm: '20%', md: '15%' },
              justifyContent: 'center',
              mt: 2,
            }}
          >
            <CategoryButton
              onClick={() => handleCategoryClick(category.id)}
              selected={selectedCategory === category.id}
            >
              <CategoryIcon selected={selectedCategory === category.id}>
                {category.icon}
              </CategoryIcon>
              <Typography variant="caption" sx={{ 
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                fontWeight: 'bold',
              }}>
                {category.name}
              </Typography>
            </CategoryButton>
          </Box>
        ))}
      </Box>
      <Divider sx={{ my: 4, borderColor: 'rgba(0, 0, 0, 0.12)' }} />
      <Grid container spacing={3}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <MenuItem item={item} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '500px',
              }}
            >
              <Typography variant="h6" color="text.secondary">
                {t('noItemsFound')}
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Menu;