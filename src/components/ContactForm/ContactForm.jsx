import { StyledForm, StyledInput, StyledLabel, StyledRoundContainer, StyledButton } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const newContact = { id, name, number };
    const form = e.target;
    form.reset();
   
      if (
        contacts.find(contact => contact.name.toLowerCase() ===
        name.toLowerCase())
      ) {
        alert(`${newContact.name} is in your phonebook! Call this person soon. 💋`);
        } else {
          dispatch(addContact(newContact));
          alert(`${newContact.name}'s number was added to your phonebook! ✅`);
        }

  };

  return (
    <StyledRoundContainer>
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel>
        name
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contacts.name}
          onChange={e => setName(e.target.value)}
        />
      </StyledLabel>
      <StyledLabel>
        number
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={contacts.number}
          onChange={e => setNumber(e.target.value)}
        />
      </StyledLabel>
      <StyledButton type="submit">add contact</StyledButton>
    </StyledForm>
    </StyledRoundContainer>
  );
};
