import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ContacFormtContainer = styled(Container)``;

export const ContacFormBoxColum = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContacFormIcon = styled(AddIcCallIcon)`
  color: ${p => p.theme.colors.secondary};

  background-color: ${p => p.theme.colors.accent};
`;

export const ContacFormAvatar = styled(Avatar)`
  color: ${p => p.theme.colors.secondary};

  background-color: ${p => p.theme.colors.accent};
`;

export const ContacFormText = styled(Typography)`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ContacFormBox = styled(Box)``;

export const ContacFormInput = styled(TextField)`
  color: ${p => p.theme.colors.text};
`;

export const ContacFormButton = styled(Button)`
  display: inline-block;
  margin-top: 20px;
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
