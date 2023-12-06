import { Login } from 'components/Login';
import { Helmet } from 'react-helmet';

export const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Login />
    </>
  );
};
