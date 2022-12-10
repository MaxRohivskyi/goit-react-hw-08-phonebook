import { useSelector } from 'react-redux';
import { selectEditing } from 'redux/contacts/selectors';
import EditContactForm from 'components/EditContactForm/EditContactForm';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Wrapper, ContainerContacts } from './ContactsPage.styled';

export default function ContactsPage() {
  const editing = useSelector(selectEditing);

  return (
    <ContainerContacts>
      <Filter />
      <Wrapper>
        <>{!editing ? <ContactForm /> : <EditContactForm />}</>
        <ContactList />
      </Wrapper>
    </ContainerContacts>
  );
}
