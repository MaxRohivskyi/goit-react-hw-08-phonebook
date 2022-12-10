import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { Logo } from 'components/Logo/Logo';
import { Bar, AppBarContainer, MenuWrapper } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Bar position="static">
        <AppBarContainer>
          <Logo />
          <Navigation />
          <MenuWrapper>{!isLoggedIn ? <AuthNav /> : <UserMenu />}</MenuWrapper>
        </AppBarContainer>
      </Bar>
    </>
  );
};
