import { Link } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <>
      <Link to="register">Register</Link>
      <Link to="login">Login</Link>
    </>
  );
};
