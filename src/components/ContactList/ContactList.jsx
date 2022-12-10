import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { ContactListItem } from 'components/ContListItem/ContactListItems';
import NotFound from 'components/NotFound/NotFound';
import { ContactListWrapper } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {contacts.length > 0 ? (
        <ContactListWrapper>
          {contacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
        </ContactListWrapper>
      ) : (
        <NotFound />
      )}
    </>
  );
};
