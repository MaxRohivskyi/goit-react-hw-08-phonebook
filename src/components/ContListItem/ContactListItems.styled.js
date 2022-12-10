import styled from '@emotion/styled';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  width: 100%;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  & span {
    display: inline-flex;
    align-items: center;
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.intermediate};
    &:first-of-type {
      margin-right: 10px;
    }
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: all 250ms ease-in-out;
  &:hover,
  :focus {
    color: red;
    transform: scale(1.3);
  }
`;

export const IconPerson = styled(PersonRemoveOutlinedIcon)`
  color: ${p => p.theme.colors.accent};
`;

export const IconMode = styled(ModeOutlinedIcon)`
  color: ${p => p.theme.colors.accent};
`;
