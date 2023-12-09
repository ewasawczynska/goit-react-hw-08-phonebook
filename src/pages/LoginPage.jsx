import { Login } from 'components/Login';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const LoginPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Login />
      </HelmetProvider>
  );
};

export default LoginPage;
