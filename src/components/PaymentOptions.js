// src/components/PaymentOptions.js
import React from 'react';
import { Box, Typography, Paper, Grid, IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const PaymentOptions = () => {
  const { t } = useTranslation();

  const paymentMethods = [
    { icon: <PaymentIcon fontSize="inherit" sx={{ fontSize: 60, color: '#1976d2' }} />, title: t('credit_card'), description: t('credit_card_description') },
    { icon: <LocalAtmIcon fontSize="inherit" sx={{ fontSize: 60, color: '#1976d2' }} />, title: t('cash'), description: t('cash_description') },
  ];

  return (
    <Box id="payment-options" sx={{ p: 4, mt: 5, background: 'linear-gradient(to right, #e3f2fd, #ffffff)' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: '#1976d2' }}>
        {t('payment_title')}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {paymentMethods.map((method, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Tooltip title={method.title} arrow>
              <Paper
                sx={{
                  p: 4,
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                    backgroundColor: '#e3f2fd',
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 3,
                    p: 2,
                    borderRadius: '50%',
                    border: '2px solid #1976d2',
                    display: 'inline-block',
                    transition: 'transform 0.3s, background-color 0.3s',
                    '&:hover': {
                      backgroundColor: '#bbdefb',
                      transform: 'rotate(10deg)',
                    }
                  }}
                >
                  {method.icon}
                </Box>
                <Typography variant="h6" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 'bold', color: '#1976d2' }}>
                  {method.title}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1rem', color: 'text.secondary' }}>
                  {method.description}
                </Typography>
              </Paper>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PaymentOptions;