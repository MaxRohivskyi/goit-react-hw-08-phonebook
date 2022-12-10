import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { Wrapper, Avatar, Btn, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Avatar />

      <UserName>{`Welcome, ${user.name.toUpperCase()}`}</UserName>
      <Btn
        variant="contained"
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </Btn>
    </Wrapper>
  );
};
