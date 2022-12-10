import styled from '@emotion/styled';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';

export const Bar = styled(AppBar)`
  background-color: ${p => p.theme.colors.accent};
`;
export const AppBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

export const MenuWrapper = styled(Container)`
  display: flex;
  justify-content: flex-end;
`;
