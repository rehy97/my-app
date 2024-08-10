import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardMedia, Typography, Modal, Box, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FlameIcon from '@mui/icons-material/Whatshot'; // Importujte ikonu plamene
import StarIcon from '@mui/icons-material/Star'; // Importujte ikonu hvězdy
import styled from '@emotion/styled';
import wood from '../images/wood.webp'; // Import the image for the background

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
`;

const ModalContent = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled(Box)`
  flex: 1;
`;

const TextContainer = styled(Box)`
  flex: 2;
  padding: 1rem;
`;

const PreparationInstructions = styled(Box)`
  margin-top: 1rem;
`;

const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

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
            backgroundImage: `url(${wood})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component="img"
            alt={item.name}
            image={item.image}
            sx={{ 
              objectFit: 'cover', 
              width: '100%',
              height: '100%',
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
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Font size in rem
              fontWeight: 'bold',
              color: '#1976d2',
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
            {item.weight} {/* Přidaná gramáž */}
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
          width: { xs: '90%', sm: '80%', md: '70%' },
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: { xs: 1, sm: 2, md: 3 },
          display: 'flex',
          flexDirection: 'column',
          outline: 'none'
        }}>
        <IconButton
          onClick={handleClose}
          size='small'
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            width: 20,
            height: 20,
            borderRadius: '50%',      // Zaoblené rohy
            backgroundColor: '#1976d2',  // Modré pozadí
            color: 'white',           // Barva ikony
            '&:hover': {
              backgroundColor: 'darkblue',  // Tmavší modré pozadí při hoveru
            },
            p: 1,                      // Padding pro větší klikací oblast
          }}
          aria-label="Close modal"
        >
          <CloseIcon fontSize='2rem' />
        </IconButton>
          <ModalContent>
            <ImageContainer>
              <CardMedia
                component="img"
                alt={`Image of ${item.name}`}
                image={item.image}
                sx={{
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </ImageContainer>
            <TextContainer>
              <Typography id="modal-title" variant="h5" component="h2" gutterBottom sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}>
                {item.name}
              </Typography>
              <Typography variant="h6" sx={{ mb: 2, fontSize: { xs: '1rem', sm: '1.125rem', md: '1.5rem' } }}>
                Price: {item.price} Kč
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                Rating: {item.rating} ⭐
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                Weight: {item.weight} {/* Přidaná gramáž */}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.125rem', md: '1.5rem' } }}>
                Preparation Instructions
              </Typography>
              <PreparationInstructions>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                  1. Place the dish in the microwave.
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                  2. Heat on high for 4 minutes.
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                  3. Stir halfway through for even heating.
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                  4. Let it sit for 1 minute before serving.
                </Typography>
              </PreparationInstructions>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '0.75rem', sm: '1.125rem', md: '1.5rem' } }}>
                Allergens
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                Contains: Milk, Nuts, Gluten
              </Typography>
            </TextContainer>
          </ModalContent>
        </Box>
      </Modal>
    </>
  );
};

export default MenuItem;


