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
  padding: 16px;
`;

const PreparationInstructions = styled(Box)`
  margin-top: 16px;
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
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
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
              fontSize: { xs: '0.85rem', sm: '1.1rem' },
              mb: 1,
            }}
          >
{truncateText(item.description, 40)}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
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
              fontSize: { xs: '0.75rem', sm: '1rem' },
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
          width: { xs: '95%', sm: '80%', md: '70%' },
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
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
              <Typography id="modal-title" variant="h5" component="h2" gutterBottom>
                {item.name}
              </Typography>
              <Typography id="modal-description" variant="body1" sx={{ mb: 2 }}>
                {item.description}
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Price: {item.price} Kč
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Rating: {item.rating} ⭐
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Preparation Instructions
              </Typography>
              <PreparationInstructions>
                <Typography variant="body2">
                  1. Place the dish in the microwave.
                </Typography>
                <Typography variant="body2">
                  2. Heat on high for 4 minutes.
                </Typography>
                <Typography variant="body2">
                  3. Stir halfway through for even heating.
                </Typography>
                <Typography variant="body2">
                  4. Let it sit for 1 minute before serving.
                </Typography>
              </PreparationInstructions>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Allergens
              </Typography>
              <Typography variant="body2">
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
