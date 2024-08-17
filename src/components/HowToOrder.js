import React from 'react';
import { Box, Typography, styled, Paper } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentIcon from '@mui/icons-material/Payment';
import useScreenSize from './useScreenSize'; // Importujte svůj hook
import { useTranslation } from 'react-i18next';

const colors = {
  primary: '#1976d2',
  secondary: '#ff9800',
  accent: '#4caf50',
  background: '#f5f7fa',
  text: '#333333',
};

// Styled components
const StepIcon = styled(Paper)(({ theme }) => ({
  width: '70px',
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${colors.primary} 0%, ${theme.palette.primary.dark} 100%)`,
  color: '#ffffff',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  '@media (min-width:600px)': {
    width: '90px',
    height: '90px',
  },
  '@media (min-width:960px)': {
    width: '110px',
    height: '110px',
  },
}));

const StepNumber = styled(Paper)(({ theme }) => ({
  width: '28px',
  height: '28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: colors.secondary,
  color: '#ffffff',
  position: 'absolute',
  bottom: '-10px',
  right: '-10px',
  fontWeight: 'bold',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  '@media (min-width:600px)': {
    width: '34px',
    height: '34px',
  },
  '@media (min-width:960px)': {
    width: '40px',
    height: '40px',
  },
}));

const DotSeparator = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '4px',
  '&:before': {
    content: '""',
    display: 'block',
    width: '4px',
    height: '4px',
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
  minHeight: '350px',
  background: `linear-gradient(135deg, ${colors.background} 0%, #ffffff 100%)`,
  borderRadius: '15px',
  padding: '40px 20px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  overflow: 'hidden',
});

const HowToOrder = () => {
  const screenSize = useScreenSize();
  const { t } = useTranslation();

  const steps = [
    { icon: <PhoneInTalkIcon sx={{ fontSize: { xs: '2.25rem', md: '3rem' } }} />, label: t('call'), description: t('call_description') },
    { icon: <ReceiptIcon sx={{ fontSize: { xs: '2.25rem', md: '3rem' } }} />, label: t('order'), description: t('order_description') },
    { icon: <DeliveryDiningIcon  sx={{ fontSize: { xs: '2.75rem', md: '3.75rem' } }} />, label: t('webring'), description: t('webring_description') },
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
      <Typography 
        variant="h4" 
        gutterBottom 
        align="center" 
        sx={{ 
          mb: 5, 
          fontWeight: 'bold', 
          color: colors.primary,
          fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' }
        }}
      >
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
                    xs: '1.0rem',  // Font size for extra-small screens
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