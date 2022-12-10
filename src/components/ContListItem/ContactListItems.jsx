import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { editContact, pickedContact } from 'redux/contacts/contactsSlice';
import { selectEditing } from 'redux/contacts/selectors';
import PropTypes from 'prop-types';
import {
  IconMode,
  IconPerson,
  Button,
  TextWrapper,
  ButtonWrapper,
} from './ContactListItems.styled';

export const ContactListItem = ({ id, name, number }) => {
  const editing = useSelector(selectEditing);

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  const handleEdit = e => {
    dispatch(editContact(!editing));
    dispatch(pickedContact(e.currentTarget.id));
  };

  return (
    <>
      <ButtonWrapper>
        <TextWrapper>
          <span>{name}:</span>
          <span>{number}</span>
        </TextWrapper>
        <Button type="button" onClick={handleDelete}>
          <IconPerson size="20" />
        </Button>

        <Button id={id} type="button" onClick={handleEdit}>
          <IconMode size="20" />
        </Button>
      </ButtonWrapper>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
