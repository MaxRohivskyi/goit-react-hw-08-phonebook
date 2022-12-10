import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const Wrapper = styled(Box)`
  display: flex;
  align-items: flex-end;
  margin: 50px;
`;

export const Input = styled(TextField)`
  padding: 5px 0;
  margin-left: 10px;
`;

export const Avatar = styled(AccountCircle)`
  color: ${p => p.theme.colors.accent};
`;
