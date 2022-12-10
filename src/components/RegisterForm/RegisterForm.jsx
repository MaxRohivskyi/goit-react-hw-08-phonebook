import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  RegisterGrid,
  RegisterButton,
  RegisterInput,
  RegisterForm,
  RegisterText,
  RegisterIcon,
  RegisterBox,
  RegisterContainer,
  RegisterAvatar,
  StyledLink,
} from './RegisterForm.styled';

export const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      register({
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password'),
      })
    );
  };

  return (
    <RegisterContainer component="main" maxWidth="xs">
      <RegisterBox>
        <RegisterAvatar>
          <RegisterIcon />
        </RegisterAvatar>
        <RegisterText component="h1" variant="h5">
          Sign up
        </RegisterText>
        <RegisterForm
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <RegisterGrid container spacing={2}>
            <RegisterGrid item xs={12}>
              <RegisterInput
                margin="normal"
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </RegisterGrid>
            <RegisterGrid item xs={12}>
              <RegisterInput
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </RegisterGrid>
            <RegisterGrid item xs={12}>
              <RegisterInput
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </RegisterGrid>
          </RegisterGrid>
          <RegisterButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </RegisterButton>
          <RegisterGrid container>
            <RegisterGrid item>
              <StyledLink to="/login" variant="body2">
                Already have an account? Sign in
              </StyledLink>
            </RegisterGrid>
          </RegisterGrid>
        </RegisterForm>
      </RegisterBox>
    </RegisterContainer>
  );
};
