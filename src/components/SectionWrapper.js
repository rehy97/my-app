import { Box } from '@mui/material';
import styled from '@mui/material/styles/styled';

const SectionWrapper = styled(Box)(({ theme, index }) => ({
    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f5f7fa',
  }));

export default SectionWrapper;