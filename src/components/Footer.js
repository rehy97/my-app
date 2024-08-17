import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, TextField, Button, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TikTokIcon from '@mui/icons-material/MusicNote';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#1c1c1c', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              hotovkynonstop.cz
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Vaše oblíbená dovážková služba.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', sm: 'flex-start' }, mb: 2 }}>
              <IconButton
                aria-label="Facebook"
                sx={{ 
                  color: 'white',
                  bgcolor: '#1877f2',
                  '&:hover': { bgcolor: '#3b5998' },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                sx={{ 
                  color: 'white',
                  bgcolor: '#c13584',
                  '&:hover': { bgcolor: '#e1306c' },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: { xs: 'center', sm: 'flex-start' },
              textAlign: { xs: 'center', sm: 'left' },
              mt: 2
            }}>
              <Typography variant="body2" sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                justifyContent: { xs: 'center', sm: 'flex-start' },
                width: '100%'
              }}>
                <PhoneIcon fontSize="small" />
                +420 123 456 789
              </Typography>
              <Typography variant="body2" sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                justifyContent: { xs: 'center', sm: 'flex-start' },
                width: '100%'
              }}>
                <EmailIcon fontSize="small" />
                hotovkynonstop@seznam.cz
              </Typography>
              <Typography variant="body2" sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                justifyContent: { xs: 'center', sm: 'flex-start' },
                width: '100%'
              }}>
                <LocationOnIcon fontSize="small" />
                Hlavní 123, 110 00 Praha 1
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {['Seznam alergenů', 'Nejčastější otázky'].map((item) => (
              <Typography key={item} sx={{ mb: 1 }}>
                <Link href="#" color="inherit" sx={{ '&:hover': { color: '#1976d2' } }}>
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Další odkazy
            </Typography>
            {['Spokojenost', 'Kontakt', 'Ochrana osobních údajů', 'Podmínky užití'].map((item) => (
              <Typography key={item} sx={{ mb: 1 }}>
                <Link href="#" color="inherit" sx={{ '&:hover': { color: '#1976d2' } }}>
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Odebírejte novinky
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Buďte první, kdo se dozví o našich speciálních nabídkách!
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Váš email"
                InputProps={{
                  endAdornment: <EmailIcon />,
                  sx: { color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, ":hover": { '& .MuiOutlinedInput-notchedOutline': { borderColor: '#1976d2' } } }
                }}
              />
              <Button variant="contained" sx={{ bgcolor: '#1976d2', '&:hover': { bgcolor: '#1565c0' } }}>
                Odebírat
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.12)' }} />
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="body2" sx={{ mb: { xs: 1, sm: 0 } }}>
            © 2024 hotovkynonstop - #hotovkynonstopcz. Všechna práva vyhrazena.
          </Typography>
          <Typography variant="body2">
            Vytvořeno s ❤️ v České republice
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;