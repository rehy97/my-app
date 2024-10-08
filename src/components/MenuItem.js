import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardMedia, Typography, Modal, Box, IconButton, Divider, Button, CircularProgress } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CloseIcon from '@mui/icons-material/Close';
import FlameIcon from '@mui/icons-material/Whatshot'; // Importujte ikonu plamene
import StarIcon from '@mui/icons-material/Star'; // Importujte ikonu hvězdy¨
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ScaleIcon from '@mui/icons-material/Scale';
import styled from '@emotion/styled';
import wood from '../images/wood.webp'; // Import the image for the background
import { keyframes } from '@emotion/react';
import { useTranslation } from 'react-i18next';

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;


const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const StyledCard = styled(Card)`
  position: relative; // Přidáno pro umístění štítků
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const NewBadge = styled(Box)`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #ff5722; // Barva pozadí štítku
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const RatingBadge = styled(Box)`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #ffd700; // Barva pozadí štítku
  color: black;
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const ModalContent = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  animation: ${fadeIn} 0.5s ease;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const TextContainer = styled(Box)`
  flex: 2;
  padding: 1rem;
  animation: ${slideIn} 0.5s ease;
`;

const PreparationInstructions = styled(Box)`
  margin-top: 1rem;
`;

const AllergenBadge = styled(Box)`
  display: inline-block;
  background-color: #f0f0f0;
  color: #333;
  padding: 4px 8px;
  border-radius: 16px;
  margin-right: 8px;
  font-size: 0.75rem;
`;

const AllergenAndOrderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const AllergenContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`; 

const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useTranslation();

  const ImageContainer = styled(Box)`
  flex: 1;
  border-radius: ${item.category === 1 ? '8px' : 0};
  box-shadow: ${item.category === 1 ? '0 4px 8px rgba(0,0,0,0.1)' : 0};
  overflow: hidden;
  transition: transform 0.3s ease;
  background-image: url(${wood}); // Použití importovaného obrázku
  background-size: cover; // Přizpůsobí obrázek velikosti kontejneru
  background-position: center; // Umístí obrázek na střed
  background-repeat: no-repeat; // Zabrání opakování obrázku
  height: 100%; // Výška obrázku
`;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const scrollToSection = (id) => {
    setOpen(false);
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offset = 50;
    const scrollPosition = elementPosition - offset;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <StyledCard 
        sx={{ 
          cursor: 'pointer', 
          maxWidth: { xs: '100%', sm: 345 }, 
          mx: 'auto', 
        }} 
        onClick={handleOpen}
        tabIndex={0}
        role="button"
        aria-label={`Open details for ${item.name}`}
        onKeyDown={(e) => { if (e.key === 'Enter') handleOpen(); }}
      >
        <Box 
          sx={{ 
            position: 'relative', 
            width: '100%', 
            height: '100%', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            backgroundImage: item.category === 1 ? `url(${wood})` : 'none', // Conditional background image
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            overflow: 'hidden',
            minHeight: 200,
          }}
        >
                    {!imageLoaded && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                height: '100%',
              }}
            >
              <CircularProgress />
            </Box>
          )}
          <CardMedia
            component="img"
            alt={item.name}
            image={item.image}
            onLoad={handleImageLoad}
            sx={{ 
              objectFit: 'cover', 
              width: '100%',
              height: '100%',
              display: imageLoaded ? 'block' : 'none',
            }}
          />
          <NewBadge>
            <FlameIcon fontSize="small" /> {/* Ikona plamene */}
            Novinka
          </NewBadge>
          <RatingBadge>
            <StarIcon fontSize="small" /> {/* Ikona hvězdy */}
            {item.rating}
          </RatingBadge>
        </Box>
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.5rem' }, // Font size in rem
              fontWeight: 'bold',
              color: '#1976d2',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              mb: 1,
            }}
          >
            {item.id}. {item.name}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.25rem', md: '1.5rem' }, // Font size in rem
              fontWeight: 'bold',
              color: '#1d273b',
              mb: 1,
            }}
          >
            {item.price} Kč
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' }, // Font size in rem
            }}
          >
            {item.weight}
          </Typography>
        </CardContent>
      </StyledCard>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{ outline: 'none' }}  // Ensure no focus outline
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '70%', md: '70%' },
          bgcolor: 'background.paper',
          borderRadius: 4,
          boxShadow: 24,
          p: { xs: 2, sm: 3, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          outline: 'none',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}>
        <IconButton
          onClick={handleClose}
          size='small'
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            width: 30,
            height: 30,
            borderRadius: '50%',      
            backgroundColor: '#1976d2',  
            color: 'white',           
            zIndex: 1,

            '&:hover': {
              backgroundColor: '#1565c0',
            }
          }}
          aria-label="Close modal"
        >
          <CloseIcon fontSize='small' />
        </IconButton>
          <ModalContent>
            <ImageContainer>
            {!imageLoaded && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <CircularProgress />
                </Box>
              )}
              <CardMedia
                component="img"
                alt={`Image of ${item.name}`}
                image={item.image}
                onLoad={handleImageLoad}
                sx={{
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </ImageContainer>
            <TextContainer>
            <Typography id="modal-title" variant="h4" component="h2" gutterBottom sx={{ 
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                color: '#1976d2',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}>
                {item.name}
              </Typography>
              <Typography variant="h5" sx={{ 
                mb: 2, 
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                color: '#1d273b',
                fontWeight: 'bold'
              }}>
                {t('price')}: {item.price} Kč
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <StarIcon sx={{ color: '#ffd700', mr: 1 }} />
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }}>
                  {t('rating')}: {item.rating}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ScaleIcon sx={{ color: '#9e9e9e', mr: 1 }} />
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }}>
                  {t('weight')}: {item.weight}
                </Typography>
              </Box>
              <AllergenAndOrderContainer>
      {item.category === 1 && (
        <Box sx={{ flex: 1 }}> {/* flex: 1 zajistí, že tento box zabere maximální prostor */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              fontWeight: 'bold',
              color: '#1976d2'
            }}
          >
            {t('allergens')}
          </Typography>
          {/*<AllergenContainer>
            {['Milk', 'Nuts', 'Gluten'].map((allergen) => (
              <AllergenBadge key={allergen}>{allergen}</AllergenBadge>
            ))}
          </AllergenContainer>*/}
        </Box>
      )}
      <Button
        variant="contained"
        color="primary"
        startIcon={<RestaurantIcon />}
        sx={{
          borderRadius: '20px',
          textTransform: 'none',
          fontSize: '1rem',
          padding: '10px 20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 6px 8px rgba(0,0,0,0.2)',
          },
          height: 'fit-content',
          ml: item.category !== 1 ? 'auto' : 0 // Margin left auto pro tlačítko, pokud není kategorie 1
        }}
        onClick={() =>  scrollToSection('how-it-works')} // Click event handler for closing modal and scrolling
      >
        {t('orderButton')}
      </Button>
    </AllergenAndOrderContainer>
            </TextContainer>
          </ModalContent>
        </Box>
      </Modal>
    </>
  );
};

export default MenuItem;


