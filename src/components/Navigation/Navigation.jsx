import { useAuth } from 'hooks';
import { NavigationWrapper, Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavigationWrapper>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </NavigationWrapper>
  );
};
