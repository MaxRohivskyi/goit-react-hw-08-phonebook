import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/filterSlice';
import { Avatar, Input, Wrapper } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(addFilter(e.target.value));
  };
  return (
    <Wrapper>
      <Avatar />
      <Input
        label="Search"
        variant="standard"
        type="text"
        name="filter"
        onChange={handleChange}
      />
    </Wrapper>
  );
}
