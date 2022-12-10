import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  LoginGrid,
  LoginButton,
  LoginInput,
  LoginForm,
  LoginText,
  LoginIcon,
  LoginBox,
  LoginContainer,
  LoginAvatar,
  StyledLink,
} from './LoginForm.styled';

export default function SignIn() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      logIn({
        email: data.get('email'),
        password: data.get('password'),
      })
    );
  };

  return (
    <LoginContainer component="main" maxWidth="xs">
      <LoginBox>
        <LoginAvatar>
          <LoginIcon />
        </LoginAvatar>
        <LoginText component="h1" variant="h5">
          Sign in
        </LoginText>
        <LoginForm
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <LoginInput
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <LoginInput
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <LoginButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </LoginButton>
          <LoginGrid container>
            <LoginGrid item>
              <StyledLink to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </StyledLink>
            </LoginGrid>
          </LoginGrid>
        </LoginForm>
      </LoginBox>
    </LoginContainer>
  );
}
