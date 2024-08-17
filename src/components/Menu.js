import React, { useState } from 'react';
import { Typography, Grid, Box, IconButton, Divider } from '@mui/material';
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
import foodsImage from '../images/foods.webp'; // Přidejte obrázky pro kategorie
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


const CategoryImage = styled(Box)(({ theme, selected }) => ({
  width: theme.spacing(11),  // Default size
  height: theme.spacing(11), // Default size
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  [theme.breakpoints.up('md')]: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
  [theme.breakpoints.up('lg')]: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
  [theme.breakpoints.up('xl')]: {
    width: theme.spacing(19),
    height: theme.spacing(19),
  },
  margin: 'auto',
  backgroundColor: selected ? theme.palette.primary.main : '#f5f5f5',
  borderRadius: '50%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  border: selected ? `3px solid ${theme.palette.primary.main}` : 'none',
}));

const AnimatedBox = animated(Box);

const Menu = () => {
  const { t } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState(1);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const categories = [
    { id: 1, name: t('foods'), image: foodsImage },
    { id: 2, name: t('drinks'), image: foodsImage },
    { id: 3, name: t('snacks'), image: foodsImage },
    { id: 4, name: t('others'), image: foodsImage },
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

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredItems = items.filter(item => item.category === selectedCategory);

  return (
    <AnimatedBox id="carousel" style={fadeIn} ref={ref} sx={{ padding: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'center',
          overflowX: 'hidden',
          width: '100%'
        }}
      >
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              flex: '0 0 auto',
              minWidth: '25%',
              boxSizing: 'border-box',
              padding: { xs: 1, md: 2 },
              textAlign: 'center',
            }}
          >
            <IconButton
              onClick={() => handleCategoryClick(category.id)}
            >
              <CategoryImage
                selected={selectedCategory === category.id}
                sx={{ backgroundImage: `url(${category.image})` }}
              />
            </IconButton>
            <Typography variant="caption" display="block" noWrap sx={{ 
              mt: 1,
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
              fontFamily: 'Poppins, Arial, sans-serif',  
            }}>
              {category.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Divider sx={{ my: 4, borderColor: 'grey.300' }} />
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        sx={{ textAlign: 'center', mb: 4 }}
      >
      </Typography>
      <Grid container spacing={2} sx={{ minHeight: { xs: '200px', sm: '250px', md: '300px', lg: '350px' } }}> {/* Nastavení minimální výšky */}
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <MenuItem item={item} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '300px', // Výška pro prázdný stav
                textAlign: 'center'
              }}
            >
              <Typography variant="h6" color="text.secondary" fontFamily={'Poppins, Arial, sans-serif'}>
                {t('noItemsFound')}
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
      </AnimatedBox>
  );
};

export default Menu;