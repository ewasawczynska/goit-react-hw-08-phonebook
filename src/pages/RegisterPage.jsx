import { Register } from 'components/Register';
import { Helmet } from 'react-helmet';

export const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Register />
    </>
  );
};