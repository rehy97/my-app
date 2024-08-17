import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTranslation } from 'react-i18next';

const PhoneFAB = () => {
  const { t } = useTranslation();

  return (
    <Tooltip title={t('callUs')}>
      <Fab
        color="primary"
        aria-label="call"
        sx={{
          position: 'fixed',
          bottom: { xs: 16, sm: 24 }, // Adjust bottom position based on screen size
          right: { xs: 16, sm: 24 },  // Adjust right position based on screen size
          width: { xs: 56, sm: 64 },  // Ensure the button size is appropriate for touch devices
          height: { xs: 56, sm: 64 }, // Ensure the button size is appropriate for touch devices
          fontSize: { xs: '2rem', sm: '3rem' }, // Adjust icon size based on screen size
          boxShadow: 3 // Optional: add a shadow to make the button stand out more
        }}
        onClick={() => window.location.href = 'tel:+420773884638'}
      >
        <PhoneIcon
          sx={{
            fontSize: { xs: 30, sm: 28 } // Adjust icon size based on screen size
          }}
        />
      </Fab>
    </Tooltip>
  );
};

export default PhoneFAB;
