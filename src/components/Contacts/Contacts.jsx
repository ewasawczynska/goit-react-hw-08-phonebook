import { StyledContact, StyledList, StyledText, StyledButton, StyledName, StyledNumber } from './Contacts.styled';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContacts, selectFilter, selectIsLoading } from '../../redux/contacts/selectors';
import { Loader } from 'components/Loader';
import { InputFiltr } from 'components/InputFiltr';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name?.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  const handleDelete = id => {
    const deletedContact = contacts.find(contact => contact.id === id);
    dispatch(deleteContact(id));
    alert(`${deletedContact.name} was removed from phonebook. Hope you won't miss this person. 🔴`)
  };

  return (
    <>
   {isLoading ? (<Loader/>) : (<>
    <StyledText>contacts list ☎</StyledText>
    <InputFiltr></InputFiltr>
    <StyledList>
    {filteredContacts.map(contact => (
      <StyledContact key={contact.id}>
      <StyledName>{contact.name}</StyledName>
      <StyledNumber>{contact.number}</StyledNumber>
      <StyledButton
        onClick={() => handleDelete(contact.id)}
      >❌</StyledButton>
    </StyledContact>
    ))}
    </StyledList></>)}
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
};


