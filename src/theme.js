import { createTheme } from '@mui/material/styles';

// Vytvoření vlastního tématu
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    //              fontFamily: 'Poppins, Arial, sans-serif',  
  },
  // Můžeš přidat další přizpůsobení tématu zde
});

export default theme;