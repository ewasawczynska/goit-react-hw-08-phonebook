import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Loader } from 'components/Loader';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';

export default function PhonebookPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your phonebook</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && <Loader/>}</div>
      <Contacts />
    </>
  );
}