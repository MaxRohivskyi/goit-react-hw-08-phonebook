import styled from '@emotion/styled';
import ContactsIcon from '@mui/icons-material/Contacts';

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconLogo = styled(ContactsIcon)`
  color: ${p => p.theme.colors.secondary};
  margin: 0 10px 0 0;
`;

export const TextLogo = styled.p`
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
