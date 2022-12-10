import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)`
  padding: 5px 20px;
  margin: 0 20px;

  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 1px 1px 3px ${p => p.theme.colors.muted};
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.secondary};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  }
`;
