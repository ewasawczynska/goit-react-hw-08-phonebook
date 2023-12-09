import { Register } from 'components/Register';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>register</title>
      </Helmet>
      <Register />
      </HelmetProvider>
  );
};

export default RegisterPage;