import styled from '@emotion/styled';
import { Button, Container } from '@mui/material';

export const Notification = styled.p`
  margin: 30px 0;

  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const ContainerBox = styled(Container)`
  text-align: center;
`;
export const Btn = styled(Button)`
  display: inline-block;
  margin-top: 30px;

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
