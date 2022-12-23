import { Box, Typography } from '@mui/material';

const NoTagSelectedPage = () => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography>NO TAG SELECTED</Typography>
    <Typography>RIGHT CLICK TO OPEN THE CONFIGURATIONG PAGE</Typography>
  </Box>
);

export default NoTagSelectedPage;
