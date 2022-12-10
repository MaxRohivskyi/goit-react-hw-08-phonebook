import { useAuth } from 'hooks';
import { Container } from '@mui/system';
import {
  Wrapper,
  Title,
  SmallSubTitle,
  UserName,
  BigSubTitle,
  TitleProduct,
  Slogan,
} from './HomePage.styled';

export default function HomePage() {
  const { isLoggedIn, user } = useAuth();
  return (
    <Wrapper>
      {isLoggedIn ? (
        <Container>
          <Title>
            <SmallSubTitle>
              Hello,<UserName> {user.name.toUpperCase()}</UserName> this is
              your:
            </SmallSubTitle>
            <TitleProduct>Safe Place:</TitleProduct>
            <BigSubTitle>Phonebook</BigSubTitle>
            <Slogan>Thank you for choosing "safe place" </Slogan>
          </Title>
        </Container>
      ) : (
        <Container>
          <Title>
            <TitleProduct>Safe Place:</TitleProduct>
            <BigSubTitle>Phonebook</BigSubTitle>
            <Slogan>
              More than a billion contacts saved in a "safe place"
            </Slogan>
          </Title>
        </Container>
      )}
    </Wrapper>
  );
}
