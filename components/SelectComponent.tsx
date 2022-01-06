import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const SelectComponent = styled(TextField)({
    background: 'white',
    borderRadius: '5%',
    width: '200px',
    margin: '0 2rem',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    '& label.Mui-focused': {
      color: 'transparent',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'transparent',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent',
      },
    },
  });