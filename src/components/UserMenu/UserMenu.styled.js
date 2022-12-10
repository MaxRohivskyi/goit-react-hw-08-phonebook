import styled from '@emotion/styled';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled(AccountCircle)`
  margin-right: 10px;
`;

export const Btn = styled(Button)`
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

export const UserName = styled.span`
  margin-right: 10px;
`;
