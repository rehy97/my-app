import React from 'react';
import { Box, Typography, styled, Paper } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentIcon from '@mui/icons-material/Payment';
import useScreenSize from './useScreenSize'; // Importujte svůj hook
import { useTranslation } from 'react-i18next';

// Styled components
const StepIcon = styled(Paper)({
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: '#1976d2', // Primary color
  color: '#ffffff', // Contrast text color
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#1976d2', // Darker primary color
  },
  '@media (min-width:600px)': {
    width: '80px',
    height: '80px',
  },
  '@media (min-width:960px)': {
    width: '100px',
    height: '100px',
  },
});

const StepNumber = styled(Paper)({
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: '#A1662F', // Secondary color
  color: '#ffffff', // Contrast text color
  position: 'absolute',
  bottom: '-7px',
  right: '-7px',
  '@media (min-width:600px)': {
    width: '30px',
    height: '30px',
    bottom: '-7px',
    right: '-7px',
  },
  '@media (min-width:960px)': {
    width: '35px',
    height: '35px',
    bottom: '-7px',
    right: '-7px',
  },
});

const DotSeparator = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '5px',
  '&:before': {
    content: '""',
    display: 'block',
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: '#1976d2', // Primary color
  },
  '@media (min-width:600px)': {
    height: '7px',
    '&:before': {
      width: '7px',
      height: '7px',
    },
  },
  '@media (min-width:960px)': {
    height: '10px',
    '&:before': {
      width: '10px',
      height: '10px',
    },
  },
});

const DotSeparatorContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& > *:not(:last-child)': {
    marginRight: '8px', // Adjust spacing between dots
  },
});

const HowToOrderContainer = styled(Box)({
  minHeight: '300px', // Adjust the minimum height as needed
  background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)', // Example gradient
  borderRadius: '10px',
  paddingTop: '35px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
});

const HowToOrder = () => {
  const screenSize = useScreenSize();
  const { t } = useTranslation();

  const steps = [
    { icon: <PhoneInTalkIcon sx={{ fontSize: { xs: '2.25rem', md: '3rem' } }} />, label: t('call'), description: t('call_description') },
    { icon: <ReceiptIcon sx={{ fontSize: { xs: '2.25rem', md: '3rem' } }} />, label: t('order'), description: t('order_description') },
    { icon: <DeliveryDiningIcon  sx={{ fontSize: { xs: '2.25rem', md: '3rem' } }} />, label: t('webring'), description: t('webring_description') },
  ];

  // Určete počet teček na základě velikosti obrazovky
  const getNumberOfDots = () => {
    switch (screenSize) {
      case 'xs':
        return 2;
      case 'sm':
        return 4;
      case 'md':
        return 7;
      case 'lg':
        return 9;
      default:
        return 5;
    }
  };

  return (
    <HowToOrderContainer id='how-it-works'>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold', color: '#1976d2' }}>
        {t('how-it-works')}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'hidden', // Allows horizontal scrolling if necessary
          }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.label}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mx: 2,
                }}
              >
                <Box sx={{ position: 'relative', mb: 2, }}>
                  <StepIcon elevation={3}>
                    {step.icon}
                  </StepIcon>
                  <StepNumber elevation={3}>
                    {index + 1}
                  </StepNumber>
                </Box>
                <Typography variant="subtitle1" align="center" sx={{ 
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '1.1rem',  // Font size for extra-small screens
                    sm: '1.2rem',  // Font size for small screens
                    md: '1.3rem',  // Font size for medium screens
                    lg: '1.4rem',    // Font size for large screens
                    xl: '1.5rem'   // Font size for extra-large screens
                  } 
                   }}>
                  {step.label}
                </Typography>
                <Typography 
                  variant="body2" 
                  align="center" 
                  sx={{ 
                    color: 'text.secondary', 
                    fontSize: {
                      xs: '0.8rem',  // Font size for extra-small screens
                      sm: '0.9rem',  // Font size for small screens
                      md: '1rem',  // Font size for medium screens
                      lg: '1.1rem',    // Font size for large screens
                      xl: '1.2rem'   // Font size for extra-large screens
                    } 
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
              {index < steps.length - 1 && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <DotSeparatorContainer>
                    {[...Array(getNumberOfDots())].map((_, dotIndex) => (
                      <DotSeparator key={dotIndex} />
                    ))}
                  </DotSeparatorContainer>
                </Box>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </HowToOrderContainer>
  );
};

export default HowToOrder;