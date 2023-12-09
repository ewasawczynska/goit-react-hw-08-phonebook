import { Register } from 'components/Register';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Register />
      </HelmetProvider>
  );
};

export default RegisterPage;