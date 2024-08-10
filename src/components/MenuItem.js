import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardMedia, Typography, Modal, Box, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import wood from '../images/wood.webp'; // Import the image for the background

const StyledCard = styled(Card)`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
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

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

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
        </Box>
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Font size in rem
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 1,
            }}
          >
            {item.id}. {item.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem' }, // Font size in rem
              mb: 1,
            }}
          >
{truncateText(item.description, 40)}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' }, // Font size in rem
              fontWeight: 'bold',
              mb: 1,
            }}
          >
            {item.price} Kč
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.6rem', sm: '0.75rem', md: '1rem' }, // Font size in rem
            }}
          >
            {item.rating} ⭐
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
          height: { xs: '90%', sm: '80%', md: '70%' },
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
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
            }}
            aria-label="Close modal"
          >
            <CloseIcon />
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
              <Typography id="modal-description" variant="body1" sx={{ mb: 2, fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }}>
                {item.description}
              </Typography>
              <Typography variant="h6" sx={{ mb: 2, fontSize: { xs: '1rem', sm: '1.125rem', md: '1.5rem' } }}>
                Price: {item.price} Kč
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                Rating: {item.rating} ⭐
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

