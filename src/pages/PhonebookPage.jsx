import { Phonebook } from 'components/Phonebook';
import { Helmet } from 'react-helmet';

export const PhonebookPage = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Phonebook />
    </>
  );
};
