import { useNavigate } from 'react-router-dom';
import { Notification, ContainerBox, Btn } from './NotFound.styled';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <ContainerBox>
      <Btn
        variant="contained"
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        Back to home page
      </Btn>
      <Notification>404 - not found anything</Notification>
    </ContainerBox>
  );
}
