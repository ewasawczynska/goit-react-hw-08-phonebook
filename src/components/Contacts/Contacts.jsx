import { Button } from 'components/Button';
import { StyledContact } from './Contacts.styled';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContacts, selectFilter, selectIsLoading } from '../../redux/contacts/selectors';
import { Loader } from 'components/Loader';

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
    alert(`${deletedContact.name} was removed from phonebook. Hope you won't miss this person.`)
  };

  return (
    <>
   {isLoading ? (<Loader/>) : (<ul>
    {filteredContacts.map(contact => (
      <StyledContact key={contact.id}>
      {contact.name}: {contact.number}
      <Button
        type="button"
        onClick={() => handleDelete(contact.id)}
        colorchange="red"
        marginchange="10px"
      >
        Delete
      </Button>
    </StyledContact>
    ))}
    </ul>)}
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


