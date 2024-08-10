import React, { useState } from 'react';
import { Typography, Grid, Box, Avatar, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuItem from './MenuItem';
import dish1 from '../images/dish1.webp';
import dish2 from '../images/dish2.webp';
import dish3 from '../images/dish3.webp';
import dish4 from '../images/dish4.webp';
import dish5 from '../images/dish5.webp';
import dish6 from '../images/dish6.webp';
import dish7 from '../images/dish7.webp';
import cola from '../images/cola.webp';
import { useTranslation } from 'react-i18next';

import FlatwareIcon from '@mui/icons-material/Flatware';
import LocalBarIcon from '@mui/icons-material/LocalBar'; // Example for Drinks
import SnackIcon from '@mui/icons-material/EmojiFoodBeverage'; // Example for Snacks
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; // Example for Others

const CategoryAvatar = styled(Avatar)(({ theme, selected }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  margin: 'auto',
  backgroundColor: selected ? theme.palette.primary.main : '#f5f5f5',
  color: selected ? '#fff' : theme.palette.primary.main,
}));

const Menu = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(1);

  const categories = [
    { id: 1, name: t('foods'), icon: <FlatwareIcon fontSize="large" /> },
    { id: 2, name: t('drinks'), icon: <LocalBarIcon fontSize="large" /> },
    { id: 3, name: t('snacks'), icon: <SnackIcon fontSize="large" /> },
    { id: 4, name: t('others'), icon: <MoreHorizIcon fontSize="large"  /> },
  ];

  const items = [
    { id: 1, name: 'Vepřové výpečky se zelím, bramborový knedlík', description: 'Šťavnatý guláš s nadýchanými bramborovými knedlíky a jemným bílým zelím.', price: 150, category: 1, image: dish1, rating: 4.5 },
    { id: 2, name: 'Hovězí stroganov, jasmínová rýže', description: 'Lahodný hovězí stroganoff s krémovou houbovou omáčkou, servírovaný s nadýchanou bílou rýží.', price: 120, category: 1, image: dish2, rating: 4.0 },
    { id: 3, name: 'Smažený kuřecí řízek, mačkané brambory s máslem', description: 'Clover, lettuce, and nuts', price: 130, category: 1, image: dish3, rating: 4.2 },
    { id: 4, name: 'Bramborové knedlíky plněné uzeným masem, zelí, cibulka', description: 'Grilled chicken and fresh greens', price: 170, category: 1, image: dish5, rating: 4.7 },
    { id: 5, name: 'Svíčková omáčka s hovězím masem, houskový knedlík', description: 'Grilled chicken and fresh greens', price: 170, category: 1, image: dish7, rating: 4.7 },
    { id: 8, name: 'Cola', description: 'Refreshing soda', price: 50, category: 2, image: cola, rating: 4.0 },
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredItems = items.filter(item => item.category === selectedCategory);

  return (
    <Box id="carousel" sx={{ padding: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'center',
          overflowX: 'auto',
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
              textAlign: 'center'
            }}
          >
            <IconButton
              onClick={() => handleCategoryClick(category.id)}
            >
              <CategoryAvatar selected={selectedCategory === category.id}>
                {category.icon}
              </CategoryAvatar>
            </IconButton>
            <Typography variant="caption" display="block" noWrap sx={{ 
              mt: 1,
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' }
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
      <Grid container spacing={2}>
        {filteredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MenuItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;