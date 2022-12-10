import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export const RegisterContainer = styled(Container)``;

export const RegisterBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 0 0;
`;

export const RegisterIcon = styled(LockOutlinedIcon)`
  color: ${p => p.theme.colors.secondary};

  background-color: ${p => p.theme.colors.accent};
`;

export const RegisterAvatar = styled(Avatar)`
  color: ${p => p.theme.colors.secondary};

  background-color: ${p => p.theme.colors.accent};
`;

export const RegisterText = styled(Typography)`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const RegisterForm = styled(Box)``;

export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.accent};
  text-decoration: underline;
`;

export const RegisterInput = styled(TextField)`
  color: ${p => p.theme.colors.text};
`;

export const RegisterButton = styled(Button)`
  display: inline-block;
  color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.normal};

  background-color: ${p => p.theme.colors.accent};
  &:hover,
  :focus {
    color: ${p => p.theme.colors.accent};

    background-color: ${p => p.theme.colors.secondary};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  }
`;

export const RegisterGrid = styled(Grid)`
  color: ${p => p.theme.colors.accent};
`;
