import { styled } from '@mui/system';
import { Button } from '@mui/material';

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginTop: '10px',
}));

export default MyButton;
