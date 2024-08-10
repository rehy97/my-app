import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const PhoneFAB = () => {
  return (
    <Tooltip title="Call Us">
      <Fab
        color="primary"
        aria-label="call"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={() => window.location.href = 'tel:+1234567890'}
      >
        <PhoneIcon />
      </Fab>
    </Tooltip>
  );
};

export default PhoneFAB;